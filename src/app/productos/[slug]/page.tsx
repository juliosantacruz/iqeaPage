import { getCatProductosBySlug } from "@/services/fetchData";
import Link from "next/link";
import React from "react";
import "./CategoryProduct.scss";
import ProductCardList from "@/components/CardProductList";

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
    <section className="catProductDetail">
      {BREADCRUMS ? (
        <div className="breadcrums">
          {BREADCRUMS.map((element) => {
            return (
              <Link href={element.url} key={element.id}>
                {element.title}
              </Link>
            );
          })}
        </div>
      ) : null}

      <div className="catProductDetailTitle">
        <h2>{title} </h2>
      </div>

      {descripcion && (
        <div className="descripcion">
          <div dangerouslySetInnerHTML={{ __html: descripcion }} />
        </div>
      )}

        <div className="productGroup">
          {productos.data.map((producto: any) => {
            const { id, attributes } = producto;
            return (
              <ProductCardList
                key={id}
                title={attributes.titulo}
                descripcion={attributes.descripcion}
                href={`/productos/${catProductSlug}/${attributes.slug}`}
              />
            );
          })}
        </div>

    </section>
  );
}
