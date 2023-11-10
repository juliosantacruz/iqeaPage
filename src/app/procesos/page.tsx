import { getProcesos } from "@/services/fetchData";
import Link from "next/link";
import React from "react";

export default async function page() {
  const data = await getProcesos();

  console.log('data ------->',data);
  return (
    <section>
      <h3>test</h3>
      {data.map((tipo_proceso: any) => {
        const { titulo,  slug} = tipo_proceso.attributes;
        // console.log("data --->", tipo_proceso.attributes);
        return (
          <article key={tipo_proceso.id}>
            <Link href={`procesos/${slug}`}>mira {'---->'} {titulo}</Link>
          </article>
        );
      })}
    </section>
  );
}

