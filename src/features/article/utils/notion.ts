import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md";

export interface NotionPost {
    id: string;
    title: string;
    date: string;
    tags: Array<string>;
    slug: string;
    thumbnail: string;
}

interface Tag {
    name: string;
}

const notion = new Client({
    auth: process.env.REACT_APP_NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({notionClient: notion});
n2m.setCustomTransformer("paragraph", async (block: any) => {
    const { embed } = block as any;
    if (block.paragraph.rich_text.length === 0) {
        return "&#13;&#10;";
    }
    return embed;
});


const getTags = (tags: Array<Tag>) => {
    const allTags = tags.map((tag) => {
        return tag.name;
    });
    return allTags;
}

export async function getAllPosts(): Promise<NotionPost[]> {
  console.log(process.env.REACT_APP_DATABASE_ID)
  const posts = await notion.databases.query({
    database_id: `${process.env.REACT_APP_DATABASE_ID}`,
    page_size: 100,
  });

  const allPosts = posts.results;
  console.log(allPosts)
  return allPosts.map((post: any) => {
      return getPageMetaData(post);
  });
}

const getPageMetaData = (post: any) => {
    const postDate = post.properties.date.date.start;
    const dateStr = postDate.toString().replace(/-/g,"/");
    return {
        id: post.id,
        title: post.properties.title.title[0].plain_text,
        date: dateStr,
        tags: getTags(post.properties.tags.multi_select),
        slug: post.properties.slug.rich_text[0].plain_text,
        thumbnail: post.properties.thumbnail.files[0].file.url
    };
}

// 出力の型定義をする
interface SinglePost {
    metadata: any;
    markdown: string;
}

export const getSinglePost = async (slug: string): Promise<SinglePost> => {
    const response = await notion.databases.query({
        database_id: `${process.env.REACT_APP_DATABASE_ID}`,
        filter: {
            property: "slug",
            formula: {
                string: {
                    equals: slug,
                },
            },
        },
    });

    const page = response.results[0];
    const metadata = getPageMetaData(page);
    
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks).parent;

    // console.log("mdString")
    // console.log(mdString)
    // console.log(mdString)

    return {
        metadata: metadata,
        markdown: mdString
    }
}
