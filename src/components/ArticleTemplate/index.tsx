import { MDXRemote } from "next-mdx-remote"
import TableContents from "../TableContents"

export default function ArticleTemplate(props: {
    idTable: string,
    tocElement: any,
    source: any
}) {
    return <>
        <div className="w-full flex">
            <div className='w-1/5'>
                <div className='fixed top-14 left-0 w-1/5 h-5/6 overflow-y-scroll'>
                    <h3 className="text-xl text-white font-bold pl-6">目录</h3>
                    <TableContents idTable={props.idTable} {...props.tocElement}></TableContents>
                </div>
            </div>
            <div className='w-4/5 pt-10 px-5'>
                {props.source && <MDXRemote {...props.source} />}
            </div>
        </div>
    </>
}