import React from "react";
import Navbar from "./Navbar";
import { fetchProductContent } from "@/services/fetchData";

export default async function Header(props: any) {
  const productDataJson = await fetchProductContent();
  const productData = JSON.parse(productDataJson).map((element: any) => {
    const arrProductos: [] = element.attributes.productos.data;
    const newProductos = arrProductos.map((producto: any) => {
      const newProducto = {
        id: producto.id,
        title: producto.attributes.titulo,
        slug: producto.attributes.slug,
      };
      return newProducto;
    });

    const newElement = {
      id: element.id,
      title: element.attributes.title,
      slug: element.attributes.slug,
      productos: newProductos,
    };
    return newElement;
  });


  return (
    <header>
      <Navbar Products={productData}/>
    </header>
  );
}
