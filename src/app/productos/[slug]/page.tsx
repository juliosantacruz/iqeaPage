import { getCatProductosBySlug } from "@/services/fetchData";
import Link from "next/link";
import React from "react";
import "./CategoryProduct.scss";
import ProductCardList from "@/components/CardProductList";
import CardList from "@/components/CardList/CardList";
import Image from "next/image";
import ImageNotFound from "@/assets/Image-not-found.png";
import CallToActionBanner from "@/components/CallToActionBanner";

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

  const productArray = productos.data
    .map((element: any) => {
      const { cover } = element.attributes;
      const newObj = {
        id: element.id,
        title: element.attributes.titulo,
        slug: element.attributes.slug,
        coverUrl: cover ? cover.data?.attributes?.formats?.thumbnail.url : null,
      };
      return newObj;
    })
    .sort((a: any, b: any) => a.title.localeCompare(b.title));

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
        {productArray.map((product: any) => {
          return (
            // <ProductCardList
            //   key={id}
            //   title={title}
            //   descripcion={descripcion}
            //   href={`/productos/${catProductSlug}/${slug}`}
            //   imageUrl={coverUrl}
            // />
            <article key={product.id} className="productCard">
              <Link href={`/productos/${catProductSlug}/${product.slug}`}>
                <Image
                  src={product.coverUrl || ImageNotFound}
                  alt={product.altCover ? product.altCover : "galeria"}
                  width={340}
                  height={200}
                />
                <div className="productTitle">
                  <p>{product.title}</p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
      <CallToActionBanner/>
    </section>
  );
}
