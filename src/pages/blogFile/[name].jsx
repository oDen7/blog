import { serialize } from 'next-mdx-remote/serialize'
import slug from 'remark-slug'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import React from 'react';
import ArticleTemplate from '@/components/ArticleTemplate';
import NavBar from '@/components/NavBar';

export default function BlogPage(props) {
    return (
        <>
            <NavBar />
            <ArticleTemplate idTable={props.idTable} tocElement={props.tocElement} source={props.source} />
        </>
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
