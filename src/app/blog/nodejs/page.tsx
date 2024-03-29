// import Image from "next/image";
import { nodeJsList } from "@/dict";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
export default function Project() {
  return (
    <>
      <NavBar />
      <section className="w-full h-full px-24 pt-24 bg-black overflow-y-scroll">
        {nodeJsList.map((item) => {
          return (<Card id={item.id} title={item.title} path={item.path} tag={item.tag} desc={item.desc}></Card>)
        })}
      </section ></>
  )
}
