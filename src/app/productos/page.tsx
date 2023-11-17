import { getCatProductos } from "@/services/fetchData";
import Link from "next/link";
import React from "react";
import "./ProductosPage.scss";
import ProductCardList from "@/components/CardProductList";
import CallToActionBanner from "@/components/CallToActionBanner";

export default async function page() {
  const data = await getCatProductos();

  const productCatArray = data.map((element:any)=>{
    const newObj = {
      id:element.id,
      title:element.attributes.title,
      slug:element.attributes.slug,
    }
    return newObj
  })


  return (
    <section className="ProductsPage">
      <div className="pageTitle">
        <h1>Productos IQEA</h1>
      </div>

      <div className="productCategoryGroup">

      {productCatArray.sort((a:any,b:any)=>a.title.localeCompare(b.title)).map((productCategory: any) => {
        const { id, title, slug } = productCategory;
        return (
          <ProductCardList
            title={title}
            href={`/productos/${slug}`}
            key={id}
          />
        );
      })}
      </div>

      <CallToActionBanner/>
    </section>
  );
}
