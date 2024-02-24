import { getProcesosBySlug } from "@/services/fetchData";
import React from "react";
import "./TipoProceso.scss";

export default async function page({ params }: { params: { slug: string } }) {
  const data = await getProcesosBySlug(params.slug);
  const textContent = data.attributes.descripcion;

  const { data: procesosList } = data.attributes.procesos ? data.attributes.procesos :undefined;
  // console.log(procesosList);
  return (
    <section className="tipoProcesosPage">
      <h2>{data?.attributes?.titulo}</h2>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: textContent }} />
      <div className="procesosList">
        {procesosList &&
          procesosList?.map((element: any) => {
            return <div key={element.id}>{element.attributes.titulo}</div>;
          })}
      </div>
    </section>
  );
}
