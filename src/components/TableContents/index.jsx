//拼接字符串工具
import clsx from 'clsx'
import React from 'react'

export default function TableContents(props) {
    switch (props.tagName) {
        case 'nav': {
            return (
                <nav className='break-words' {...props.properties}>{props.children.map((item, index) => {
                    return <TableContents {...item} key={index} idTable={props.idTable} />
                })}</nav>
            )
        };
        case 'ol': {
            return (
                <ol className='break-words' {...props.properties}>{props.children.map((item, index) => {
                    return <TableContents {...item} key={index} idTable={props.idTable} />
                })}</ol>
            )
        };
        case 'li': {
            return (
                <li className='break-words' {...props.properties}>{props.children.map((item, index) => {
                    return <TableContents {...item} key={index} idTable={props.idTable} />
                })}</li>
            )
        };
        case 'a': {
            return (
                <a {...props.properties} className={clsx('text-white text-lg break-words', props.properties.href == '#' + props.idTable && 'text-[#428dcc] dark:text-gray-200')}>{props.children.map((item, index) => {
                    return <TableContents {...item} key={index} />
                })}</a>
            )
        };
        default: return (
            <>{props.value}</>
        )
    }
}

