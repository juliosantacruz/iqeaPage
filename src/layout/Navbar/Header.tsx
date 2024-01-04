import React from "react";
import Navbar from "./Navbar";
import { fetchProductContent, fetchSTratamientoContent } from "@/services/fetchData";

export default async function Header(props: any) {
  const productDataJson = await fetchProductContent();
  const productData =productDataJson? JSON.parse(productDataJson).map((element: any) => {
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
  }):'';

  const systemsDataJson = await fetchSTratamientoContent();
  const systemsData =systemsDataJson? JSON.parse(systemsDataJson).map((element: any) => {
    const newElement = {
      id: element.id,
      title: element.attributes.titulo,
      slug: element.attributes.slug,
    };
    return newElement;
  }):'';



  return (
    <header>
      <Navbar Products={productData} Systems={systemsData}/>
    </header>
  );
}
