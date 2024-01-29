// import Image from "next/image";
import Card from "@/components/Card";
import { sortList } from "@/dict";
export default function Index() {
  return (
    <section className="w-full h-full px-24 pt-24 bg-black overflow-y-scroll">
      {sortList.map((item) => {
        return (<Card id={item.id} title={item.title} path={item.path} tag={item.tag} desc={item.desc}></Card>)
      })}
    </section>
  )
}
