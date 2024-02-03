import { getServicios } from "@/services/fetchData";
import Link from "next/link";
import React from "react";
import "./Servicios.scss";
import Image from "next/image";
import ProductCardList from "@/components/CardProductList";
import CardList from "@/components/CardList/CardList";
import CallToActionBanner from "@/components/CallToActionBanner";

export default async function page() {
  const data = await getServicios();

  const serviciosArr = data.map((element:any)=>{
    const servicioCover= element.attributes.cover

    const newServicio={
      id:element.id,
      title:element.attributes.titulo,
      slug:element.attributes.slug,
      cover:servicioCover.data.attributes.url,

    }
    return newServicio
  })

  return (
    <section className="serviciosPage">
      <div className="serviciosPageTitle">
        <h2>Servicios IQEA</h2>
      </div>

      <div className="servicioList">

      {serviciosArr.map((servicio: any) => {


        return (

            <CardList usoCard='servicios' element={servicio} key={servicio.id} />

        );
      })}

      </div>
      <CallToActionBanner/>
    </section>
  );
}

