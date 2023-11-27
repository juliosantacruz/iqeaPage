import React from "react";
import "./CardProject.scss";
import Image from "next/image";

import sample from "@/assets/servicios/ImgHt1.jpg";
import Link from "next/link";

export default function CardProjects({leProject}:any) {

  return (
    <Link href={`/proyectos/${leProject.slug}`}>
    <article className="CardProject">
      <div className="CardProjectImage">
        {leProject.cover &&

        <Image src={leProject.cover} alt={leProject.altText?leProject.altText:'galeria'} width={340} height={300}/>
        }
      </div>
      <div className="CardProjectBody truncate">
        <h3 className="">{leProject.title}</h3>
        <p className="">
          {leProject.scope}
        </p>

      </div>
      <div className="CardProjectLabels">
        {
          leProject.tags &&
          leProject.tags.map((tag:string)=>{

            return (<div className="label" key={tag}>{tag}</div>)
          })
        }

      </div>
    </article></Link>
  );
}
