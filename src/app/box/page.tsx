// import Image from "next/image";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import { boxList } from "@/dict";
export default function Index() {

  return (
    <>
      <NavBar />
      <section className="w-full h-full px-24 pt-24 bg-black overflow-y-scroll">
        {boxList.map((item) => {
          return (<Card id={item.id} title={item.title} path={item.path} tag={item.tag} desc={item.desc} target={item.target}></Card>)
        })}
      </section>
    </>
  )
}
