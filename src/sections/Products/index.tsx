import React from "react";
import "./Products.scss";
import ButtonStyle from "@/components/ButtonStyle";
import { getCatProductos } from "@/services/fetchData";
import SlideProducts from "@/components/SlideProducts/SlideProducts";
import Link from "next/link";


  const random_array=(arr:any)=>{

    const copiaArray = arr.slice(); // Crear una copia del array para no modificar el original
    for (let i = copiaArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copiaArray[i], copiaArray[j]] = [copiaArray[j], copiaArray[i]];
    }

    const primerosCincoObjetos = copiaArray.slice(0, 5);
    return primerosCincoObjetos
  }



export default async function Products() {
  const data = await getCatProductos();

  const category_productArray = data.flatMap((element: any) => {
    const productArr = element.attributes.productos.data;

    const newProdArr = productArr.map((product: any) => {
      const newProduct = {
        id: product.id,
        title: product.attributes.titulo,
        slug: product.attributes.slug,
        cover: product.attributes.cover.data?.attributes.url,
        cover_alt: product.attributes.cover.data?.attributes.alternativeText,
        category_slug: element.attributes.slug,
      };
      return newProduct;
    });
    return newProdArr;
  });



  const productData =random_array(category_productArray)


  return (
    <section className="productsIqea">
      <div className="productsHeaders">
        <h2>Nuestros Productos</h2>
        <p>
          Somos orgullosos distribuidores de distintas de marcas proveedoras de
          insumos para tu sistema de tratamiento de agua, contamos con filtros,
          quimicos, solventes, equipo de bombeo y mas...
        </p>
      </div>

      <div className="productsGroup">

      <SlideProducts productData={productData}/>

      </div>
      <ButtonStyle>
        <Link href={'/productos'} style={{ margin: "30px 0", width: "300px" }}>Ver mas...</Link>
      </ButtonStyle>
    </section>
  );
}
