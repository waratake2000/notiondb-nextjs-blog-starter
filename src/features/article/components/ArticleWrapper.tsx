import React, { useEffect, useState } from 'react'
import Markdown, { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { getAllPosts } from '../utils/notion';

type ArticleContentProps = {
    allContents: string;
}

// const SHeader1 = styled.h1`
//     margin-top: 1.8em;
//     margin-bottom: 7px;
//     padding: 3px 2px 0 2px;
//     font-weight: 900;
//     font-size: 2em;
//     line-height: 1.3;
//     border-bottom: sOlid 2px ${theme.ContentsColors.sub};
// `;

// const SHeader2 = styled.h2`
//     margin-top: 1.2em;
//     margin-bottom: 1px;
//     padding: 3px 2px;
//     font-weight: 900;
//     font-size: 1.5em;
//     line-height: 1.3;
// `;

// const SHeader3 = styled.h3`
//     margin-top: 0.8em;
//     margin-bottom: 1px;
//     padding: 3px 2px;
//     font-weight: 900;
//     font-size: 1.25em;
//     line-height: 1.3;
// `;

// const Sp = styled.p`
//     margin-top: 1px;
//     margin-bottom: 1px;
//     line-height: 1.6;
//     padding: 3px 2px;
// `;

// const SUl = styled.ul`
//     line-height: 1.6;
//     padding: 3px 2px 3px 1.75em;
// `;

// const SOl = styled.ol`
//     line-height: 1.6;
//     padding: 3px 2px 3px 1.75em;
// `;

// const SImg = styled.img`
//     width: 80%;
//     margin-top: 1em;
//     margin-bottom: 1em;
//     margin-right: 10%;
//     margin-left: 10%;
//     filter: drop-shadow(1px 1px 8px #aaa);
// `;

// const SCode = styled.code`
//     height: 1em;
//     /* font-weight: bold; */
//     color: #81ff75;
//     padding: 0.2em 0.5em;
//     border-radius: 1px;
//     background-color: #3a3a3a;
// `;

const components: Components = {
    h1: ({node,children, ...props}) => {
        const title = node?.children[0] && 'value' in node?.children[0] ? node?.children[0].value : '';
        return (
            <h2 className='pt-10 pb-4 text-3xl font-extrabold border border' {...props}>
                <a id={title} >
                    {children}
                </a>
            </h2>
        )
    },
    h2: ({node,children, ...props}) => {
        const title = node?.children[0] && 'value' in node?.children[0] ? node?.children[0].value : '';
        return (
            <h3 className='text-2xl font-extrabold py-2' {...props}>
                <a id={title} >
                    {children}
                </a>
            </h3>
        )
    },
    h3: ({node,children, ...props}) => {
        const title = node?.children[0] && 'value' in node?.children[0] ? node?.children[0].value : '';
        return (
            <h4 className='text-xl font-bold py-2' {...props}>
                <a id={title} >
                    {children}
                </a>
            </h4>
        )
    },
    p: ({node, ...props}) => <p className='text-base' {...props} />,
    ul: ({node, ...props}) => <ul className='' {...props} />,
    ol: ({node, ...props}) => <ol className='' {...props} />,
    img: ({src}) => <img src={src!} alt="再読み込みしてください" />,
    code: ({...props}: any) => {
        console.log("props")
        console.log(props)
        const {children, className} = props
        const match = /language-(\w+)/.exec(className || '')
        return match ? (
          <SyntaxHighlighter
            {...props}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            style={vscDarkPlus}
          />
        ) : (
          <div>
            {children}
          </div>
        )
    },
}

const ArticleWrapper: React.FC<ArticleContentProps> = ({allContents}) => {
  return (
    <>
        <Markdown 
            children={allContents}
            components={components}
        />
    </>
  )
}

// const ArticleWrapper = () => {

//   // useEffect(() => {
//   //   const allPosts = getAllPosts()
//   //   console.log(allPosts)
//   // })

//   return (
//     <>
//       <button>getAllPostsボタン</button>
//     </>
//   )
// }

export default ArticleWrapper
