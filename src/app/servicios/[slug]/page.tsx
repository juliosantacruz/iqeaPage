import { getServiciosBySlug } from "@/services/fetchData";
import React from "react";

export default async function page({ params }: { params: { slug: string } }) {

  const data = await getServiciosBySlug(params.slug);
  const textContent = data.attributes.contenido;
  
  // console.log(data);
  return (
    <section>
      <h2>{data?.attributes?.titulo}</h2>

      {data?.attributes?.descripcion}
      <hr />
      <div dangerouslySetInnerHTML={{ __html: textContent }} />
    </section>
  );
}
