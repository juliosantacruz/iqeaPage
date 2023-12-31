import { getProductosBySlug } from "@/services/fetchData";
import Link from "next/link";
import React from "react";
import "./Producto.scss";
import CallToActionBanner from "@/components/CallToActionBanner";
export default async function page({
  params,
}: {
  params: { slug: string; producto: string };
}) {
  const data = await getProductosBySlug(params.producto);
  const { titulo, descripcion, contenido } = data.attributes;

  const BREADCRUMS = [
    { id: 1, title: "Inicio.. ", url: "/" },
    { id: 2, title: "/Productos.. ", url: "/productos" },
    { id: 3, title: `/${params.slug}.. `, url: `/productos/${params.slug}/` },
    {
      id: 4,
      title: `/${params.producto} `,
      url: `/productos/${params.slug}/${params.producto}/`,
    },
  ];

  return (
    <section className="productDetail">
      {BREADCRUMS ? (
        <div className="breadcrums">
          {BREADCRUMS.map((element) => {
            return <Link href={element.url}  key={element.id}>{element.title}</Link>;
          })}
        </div>
      ) : null}
      <div className="productDetailTitle">
        <h2>{titulo} </h2>
      </div>
      <div className="descripcion">
        <div dangerouslySetInnerHTML={{ __html: descripcion }} />
      </div>

      <div className="contenido">
        <div className="contenido" dangerouslySetInnerHTML={{ __html: contenido }} />
      </div>

      <CallToActionBanner/>
    </section>
  );
}
