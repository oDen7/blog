// import Image from "next/image";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import { projectlist } from "@/dict";
export default function Index() {

  return (
    <><NavBar />
      <main className="w-full h-full px-24 pt-24 bg-black overflow-y-scroll">
        {
          projectlist.map(item => {
            return <div className="" key={item.id}>
              <p className="text-white text-3xl mb-4">{item.title}</p>
              <div className="flex flex-wrap">
                {item.list.map(item1 => {
                  return <div className="w-1/2 pr-5">
                    <Card id={item1.title} titleTag titleTagState={item1.projectState as projectStatusType} target title={item1.title} desc={item1.desc} path={item1.path} tag={item1.tag}></Card>
                  </div>
                })}
              </div>
            </div >
          })
        }
      </main >
    </>
  )
}
