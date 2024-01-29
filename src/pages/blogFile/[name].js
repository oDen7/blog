import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
// import Layout from "../../components/Layout";
import slug from 'remark-slug'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import TableContents from '@/components/TableContents';
import React, { useState } from 'react';

// import { useInView } from 'react-intersection-observer';
export default function BlogPage(props) {
    // const [id, setId] = useState(array[0])
    return (
        <div className="wrapper">
            {/* <Layout href='/blog' full={true} theme={props.theme} setTheme={props.setTheme}> */}
            {/* <div>{props.source.frontmatter.title}</div> */}
            <div className='grid grid-cols-4 gap-6 relative'>
                <div className='markdown xl:col-span-3 col-span-5 p-5 rounded-lg dark:bg-[#222222] box-shadow bg-white'>
                    <MDXRemote {...props.source} />
                </div>
                <div className='xl:block hidden'>
                    <div className='sticky top-24 p-5 rounded-lg dark:bg-[#222222] box-shadow bg-white'>
                        <h3 className="text-xl text-gray-900 dark:text-gray-100 dark:opacity-90 font-bold pb-4">目录</h3>
                        <TableContents idTable={"id"} {...props.tocElement}></TableContents>
                    </div>
                </div>
            </div>
            {/* </Layout> */}
        </div>
    )
}

export async function getStaticProps(context) {
    // MDX text - can be from a local file, database, anywhere
    const fs = require('fs')
    const path = require('path')
    const toc = require("@jsdevtools/rehype-toc");
    let tocElement

    const { name } = context.params
    console.log(path.join(process.cwd(), 'src', 'content', name + '.md'));
    let source = String(fs.readFileSync(path.join(process.cwd(), 'src', 'content', name + '.md')))
    const mdxSource = await serialize(source, {
        scope: {},
        mdxOptions: {
            remarkPlugins: [slug, remarkGfm],
            rehypePlugins: [rehypePrism, [toc, {
                headings: ['h1', 'h2', 'h3', 'h4'],
                customizeTOC: (tocAll) => {
                    tocElement = tocAll
                    return false
                }
            }]],
            format: 'mdx'
        },
        parseFrontmatter: true
    })
    return { props: { source: mdxSource, tocElement: tocElement } }
}
export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}
