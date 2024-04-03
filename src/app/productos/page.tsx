import { getCatProductos } from "@/services/fetchData";
import Link from "next/link";
import React from "react";
import "./ProductosPage.scss";
import ProductCardList from "@/components/CardProductList";
import CallToActionBanner from "@/components/CallToActionBanner";
import ProductsShowCase from "@/sections/ProductsShowCase/ProductsShowCase";

export default async function page() {
  const data = await getCatProductos();

  const productCatArray = data.map((element:any)=>{
    const productArr = element.attributes.productos.data
    const newProdArr =  productArr.map((product:any)=>{
      const newProduct={
        id:product.id,
        title:product.attributes.titulo,
        slug:product.attributes.slug,
        cover:product.attributes.cover.data?.attributes.url,
        altCover:product.attributes.cover.data?.attributes.alternativeText
      }
      return newProduct
    })
    const newObj = {
      id:element.id,
      title:element.attributes.title,
      slug:element.attributes.slug,
      description:element.attributes.descripcion,
      products:newProdArr
    }
    return newObj
  })

  return (
    <section className="ProductsPage">
      <div className="pageTitle">
        <h1>Productos IQEA</h1>
      </div>

      <div className="productCategoryGroup">


      </div>

      {/* <ProductsShowCase productCatArray={productCatArray}/> */}

      <CallToActionBanner/>
    </section>
  );
}
