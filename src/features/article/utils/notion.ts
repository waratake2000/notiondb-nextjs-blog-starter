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
    auth: process.env.NOTION_TOKEN,
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
    const posts = await notion.databases.query({
        database_id: `${process.env.DATABASE_ID}`,
        page_size: 100,
    });

    const allPosts = posts.results;
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

export const getSinglePost = async (slug: string) => {
    const response = await notion.databases.query({
        database_id: `${process.env.DATABASE_ID}`,
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

    // console.log("page.id")
    // console.log(page.id)
    const mdblocks = await n2m.pageToMarkdown(page.id);
    // console.log("mdblocks")
    // console.log(mdblocks)
    const mdString = n2m.toMarkdownString(mdblocks).parent;


    return {
        metadata,
        markdown: mdString
    }

    // const mdBlocks = await n2m.page

}
