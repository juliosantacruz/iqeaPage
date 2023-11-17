import { getCatProductos } from "@/services/fetchData";
import Link from "next/link";
import React from "react";
import "./ProductosPage.scss";
import ProductCardList from "@/components/CardProductList";

export default async function page() {
  const data = await getCatProductos();

  // console.log(data)
  return (
    <section className="ProductsPage">
      <div className="pageTitle">
        <h1>Productos IQEA</h1>
      </div>

      <div className="productCategoryGroup">

      {data.map((servicio: any) => {
        const { title, slug } = servicio.attributes;
        return (
          <ProductCardList
            title={title}
            href={`/productos/${slug}`}
            key={servicio.id}
          />
        );
      })}
      </div>
    </section>
  );
}
