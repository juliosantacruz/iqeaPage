import { getProyectos } from "@/services/fetchData";
import React from "react";

export default async function page() {
  const data = await getProyectos();

  return (
    <section>
      <h3>test</h3>
      {data.map((proyecto: any) => {
        const { titulo } = proyecto.attributes;
        // console.log("data --->", proyecto.attributes);
        return <article key={proyecto.id}>{titulo}</article>;
      })}
      {/* <h2>{data.attributes.titulo}</h2>
      <p>{data.attributes.anio}</p>
      <div>{data.attributes.descripcion}</div> */}
    </section>
  );
}
