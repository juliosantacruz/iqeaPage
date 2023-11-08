import { getProyectos } from "@/services/fetchData";
import Link from "next/link";
import React from "react";

export default async function page() {
  const data = await getProyectos();

  return (
    <section>
      <h3>test</h3>
      {data.map((proyecto: any) => {
        const { titulo, slug } = proyecto.attributes;
        // console.log("data --->", proyecto.attributes);
        return <article key={proyecto.id}>
          <Link href={`proyectos/${slug}`} >
          {titulo}
          </Link>
        </article>;
      })}
    
    </section>
  );
}
