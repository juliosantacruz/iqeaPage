import { getServiciosBySlug } from "@/services/fetchData";
import React from "react";
import "./ServiciosDetail.scss";
import CallToActionBanner from "@/components/CallToActionBanner";

export default async function page({ params }: { params: { slug: string } }) {
  const data = await getServiciosBySlug(params.slug);
  const textContent = data.attributes.contenido;

  // console.log(data);
  return (
    <section className="serviciosDetail">
      <div className="pageTitle">
        <h1>{data?.attributes?.titulo}</h1>
      </div>
      <div className="pageDescription">
        {data?.attributes?.descripcion}
      </div>
      <hr />
      <div className="pageContent" dangerouslySetInnerHTML={{ __html: textContent }} />
      <CallToActionBanner/>
    </section>
  );
}


