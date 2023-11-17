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

  const productArray = productos.data.map((element:any)=>{
    const {cover} =  element.attributes
    const newObj = {
      id:element.id,
      title:element.attributes.titulo,
      slug:element.attributes.slug,
      coverUrl: cover? cover.data?.attributes?.formats?.thumbnail.url:null
    }
    return newObj
  }).sort((a:any,b:any)=>a.title.localeCompare(b.title))

  // console.log(productArray)

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
          {productArray.map((producto: any) => {
            const { id, title, descripcion, slug,coverUrl } = producto;
            return (
              <ProductCardList
                key={id}
                title={title}
                descripcion={descripcion}
                href={`/productos/${catProductSlug}/${slug}`}
                imageUrl={coverUrl}
              />
            );
          })}
        </div>

    </section>
  );
}
