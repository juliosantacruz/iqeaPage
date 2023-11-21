import React from "react";
import Link from "next/link";
import { getProcesos } from "@/services/fetchData";
import ProductCardList from "@/components/CardProductList";
import './ProcesosPage.scss'
import CallToActionBanner from "@/components/CallToActionBanner";




export default async function page() {
  const data = await getProcesos();

  // console.log('data ------->',data);
  return (
    <section className="ProcesosPage">


      <div className="ProcesosPageTitle">
        <h2>Procesos IQEA</h2>
      </div>


      <div className="ProcesosGroup">

      {data.map((tipo_proceso: any) => {
        const { titulo,  slug} = tipo_proceso.attributes;
        // console.log("data --->", tipo_proceso.attributes);
        return (

          <ProductCardList key={tipo_proceso.id} title={titulo} href={`procesos/${slug}`}/>

        );
      })}
      </div>
<CallToActionBanner/>
    </section>
  );
}

