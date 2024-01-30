import { chekType } from '@/tools';
import Link from 'next/link';
import React from 'react'

function tagOrTagList(props: {
    tag: string | string[]
}) {
    return (
        <>
            {
                chekType(props.tag, "String") ? <span className='p-0.5 text-white text-xs border rounded-sm'>{props.tag}</span> :
                    [...props.tag as string[]].map((item) => {
                        return <span key={item} className='inline-block p-0.5 text-white text-xs border rounded-sm mr-1'>{item}</span>
                    })

            }
        </>
    )
}

function returnTagState(props: { titleTagState: string }) {
    switch (props.titleTagState) {
        case "closed":
            return <p className='ml-2 inline-block h-full p-0.5 text-white text-xs border rounded-sm border-rose-500'>closed</p>;
        case "open":
            return <p className='ml-2 inline-block h-full p-0.5 text-white text-xs border rounded-sm border-lime-300'>open</p>;
    }
}

function getTitleTag(props: {
    titleTag: boolean,
    titleTagState: projectStatusType
}) {
    return (<>
        {
            props.titleTag ?
                returnTagState(props)
                : <></>
        }
    </>)
}

export default function Card(props: {
    id: any,
    path: string,
    title: string,
    titleTag?: boolean,
    titleTagState?: projectStatusType,
    desc: string,
    tag: string | string[],
    target?: boolean
}) {
    return (<>
        <div key={props.id} className='w-full min-h-20 p-2 border rounded-sm border-emerald-300 mb-4' >
            <Link href={props.path || "/"} target={props.target ? "_blank" : ""}>
                <div className='flex flex-start items-center'>
                    <p className='text-white text-3xl' >{props.title} </p>
                    {props && getTitleTag(props as {
                        titleTag: boolean,
                        titleTagState: projectStatusType
                    })}
                </div>
                <p className='text-white text-lg' >{props.desc}</p>
                <p> {props && tagOrTagList(props as { tag: string | string[] })}</p>
            </Link>
        </div>
    </>)
}