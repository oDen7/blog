import Image from "next/image";
import Link from "next/link";

const list = [
  {
    id: "homeblog",
    path: "/blog",
    iconSrc: "/file.svg",
    title: "博客"
  },
  // {
  //   id: "homedemo",
  //   path: "/demo",
  //   iconSrc: "/white.svg",
  //   title: "业务代码实现demo"
  // },
  {
    id: "homeproject",
    path: "/project",
    iconSrc: "/develop.svg",
    title: "项目"
  },
  {
    id: "homebox",
    path: "/box",
    iconSrc: "/box.svg",
    title: "杂货铺"
  }
]
// const list1 = [
//   {
//     id: "homecs",
//     path: "/cs",
//     iconSrc: "/search.svg",
//     title: "计算机科学"
//   }, {
//     id: "homealg",
//     path: "/alg",
//     iconSrc: "/clockIn.svg",
//     title: "算法学习"
//   }, {
//     id: "homebox",
//     path: "/box",
//     iconSrc: "/box.svg",
//     title: "杂货铺"
//   }
// ]
export default function Home() {
  return (
    <main className="w-full h-full p-24 bg-black">
      <div className="text-center text-white text-4xl">oDen7的个人博客</div>
      <div className="w-full h-full flex justify-center">
        {list.map(item => {
          return (<>
            <div key={item.id} className=" flex-1  box-border text-white text-center">
              <div className="w-full h-full flex flex-col justify-center">
                <Link href={item.path}>
                  <div className="flex justify-center">
                    <Image
                      src={item.iconSrc}
                      alt={item.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className="mt-10 text-2xl" >{item.title}</p>
                </Link>
              </div>
            </div></>)
        })}
      </div>
      {/* <div className="w-full h-1/2 flex  justify-center ">
        {list1.map(item => {
          return (<>
            <div key={item.id} className=" flex-1  box-border text-white text-center">
              <Link href={item.path}>
                <div className="flex justify-center">
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    width={100}
                    height={100}
                  />
                </div>
                <p className="mt-10 text-2xl" >{item.title}</p>
              </Link>
            </div></>)
        })}
      </div> */}
      {/* <div className="fixed w-full h-14 bg-green-500 top-0 left-0 z-10">
        <nav className="p-4">
          <ul className="flex justify-start">
            <li className="cursor-pointer">首页</li>
            <li className="ml-5 cursor-pointer">博客</li>
            <li className="ml-5 cursor-pointer">项目</li>
          </ul>
        </nav>
      </div> */}
    </main>
  )
}
