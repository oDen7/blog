// import Image from "next/image";
import Card from "@/components/Card";
import { jsList } from "@/dict";
export default function Javascript() {
  return (
    <>
      <section className="w-full h-full px-24 pt-24 bg-black overflow-y-scroll">
        {jsList.map((item) => {
          return (<Card id={item.id} key={item.id} title={item.title} path={item.path} tag={item.tag} desc={item.desc}></Card>)
        })}
      </section>
    </>
  )
}
