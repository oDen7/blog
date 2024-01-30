import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (<>
        <div className="w-full h-12 fixed top-0 left-0 bg-white text-black flex items-center z-10">
            <div className='ml-10'><Link href="/">首页</Link></div>
            <div className='ml-10'><Link href="/blog">博客</Link></div>
            <div className='ml-10'><Link href="/project">项目</Link></div>
            <div className='ml-10'><Link href="/box">杂货铺</Link></div>
        </div>
    </>)
}