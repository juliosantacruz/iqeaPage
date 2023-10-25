"use client";
import React from "react";
import "./Stats.scss";
import CardStats from "@/components/CardStats";

import stats_1 from "@/assets/stats/stats1.svg";
import stats_2 from "@/assets/stats/stats2.svg";
import stats_3 from "@/assets/stats/stats3.svg";
import { Slide, Slideshow } from "@/components/Slideshow";
import Image from "next/image";

const statsMundo = [
  {
    title: "1,000+",
    subtitle:
      "Clientes de sector Industrial, Farmacologico, Alimenticio y Construccion",
    id: "1",
    image: stats_1,
  },
  {
    title: "2.3 Millones",
    subtitle: "De metros cubicos de agua por anio tratada",
    id: "2",
    image: stats_1,
  },
  {
    title: "40 millones",
    subtitle: "Metros cubicos de agua por anio tratada",
    id: "3",
    image: stats_1,
  },
];

const statsAguaPotable = [
  {
    title: "20+",
    subtitle: "Sistemas de tratamiento de agua potable construidos",
    id: "1",
    image: stats_2
  },
  {
    title: "3,800 ",
    subtitle: "Metros cubicos de agua tratada por dia desde 2004",
    id: "2",
    image: stats_2
  },
  {
    title: "24.5 ",
    subtitle: "Millones de metros cubicos de agua potabilizada",
    id: "3",
    image: stats_2
  },
];

const statsAguaResidual = [
  {
    title: "20+",
    subtitle: "Sistemas de tratamiento de agua residual",
    id: "1",
    image: stats_3
  },
  {
    title: "3,700 ",
    subtitle: "Metros cubicos de agua tratada por dia desde 2004",
    id: "2",
    image: stats_3
  },
  {
    title: "15.2",
    subtitle: "Millones de metros cubicos de agua tratada",
    id: "3",
    image: stats_3
  },
];

export default function Stats() {
  return (
    <section className="statsIqea">
      <div className="skewed">
        <div className="statsGroup">
           
            <CardStats arrData={statsMundo} />
            <CardStats arrData={statsAguaPotable} />
            <CardStats arrData={statsAguaResidual} />


           

          {/* <Slideshow
            controls={false}
            autoplay={true}
            styleProps={{ width: "300px" }}
          >
            {statsAguaPotable.map((data) => {
              return (
                <Slide key={data.id}>
                  <CardStats data={data} />
                </Slide>
              );
            })}
          </Slideshow>
          <Slideshow
            controls={false}
            autoplay={true}
            styleProps={{ width: "300px" }}
          >
            {statsAguaResidual.map((data) => {
              return (
                <Slide key={data.id}>
                  <CardStats data={data} />
                </Slide>
              );
            })}
          </Slideshow> */}
        </div>
      </div>
    </section>
  );
}
