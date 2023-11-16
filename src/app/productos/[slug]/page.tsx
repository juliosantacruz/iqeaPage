import { getCatProductosBySlug } from "@/services/fetchData";
import Link from "next/link";
import React from "react";

export default async function page({ params }: { params: { slug: string } }) {
  const data = await getCatProductosBySlug(params.slug);

  const {
    title,
    slug: catProductSlug,
    productos,
    descripcion,
  } = data.attributes;


  const BREADCRUMS = [
    { id: 1, title: "Inicio.. ", url: "/" },
    { id: 2, title: "/Productos.. ", url: "/productos" },
    { id: 3, title: `/${params.slug}.. `, url: `/productos/${params.slug}/` },

  ];


  return (
    <section>
{BREADCRUMS ? (
        <div className="breadcrums">
          {BREADCRUMS.map((element) => {
            return <Link href={element.url} key={element.id}>{element.title}</Link>;
          })}
        </div>
      ) : null}

      <h3>{title}</h3>

      {descripcion && (
        <div className="descripcion">
          <div dangerouslySetInnerHTML={{ __html: descripcion }} />
        </div>
      )}
      {productos.data.map((producto: any) => {
        const { id, attributes } = producto;
        return (
          <Link
            href={`/productos/${catProductSlug}/${attributes.slug}`}
            key={data.id}
          >
            <article key={id}>{attributes.titulo}</article>
          </Link>
        );
      })}
    </section>
  );
}
