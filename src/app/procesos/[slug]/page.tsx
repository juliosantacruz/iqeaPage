import { getProcesosBySlug } from "@/services/fetchData";
import React from "react";

export default async function page({ params }: { params: { slug: string } }) {
    const data = await getProcesosBySlug(params.slug);
    const textContent = data.attributes.descripcion;

  console.log(data);
  return (
    <section>
      <h2>{data?.attributes?.titulo}</h2>
      asdfasdf
      {/* {data?.attributes?.descripcion} */}
      <hr />
      <div dangerouslySetInnerHTML={{ __html: textContent }} />
    </section>
  );
}
