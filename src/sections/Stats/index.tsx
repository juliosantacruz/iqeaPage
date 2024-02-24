"use client";
import React from "react";
import "./Stats.scss";
import CardStats from "@/components/CardStats";

import stats_1 from "@/assets/stats/stats1.svg";
import stats_2 from "@/assets/stats/stats2.svg";
import stats_3 from "@/assets/stats/stats3.svg";
import { Slide, Slideshow } from "@/components/Slideshow";
import Image from "next/image";
import {useTranslation} from 'react-i18next'


export default function Stats() {
  const {t}=useTranslation()

  const statsMundo = [
    {
      title: "1,000+",
      subtitle:t('StatsMundoCopy1'),
      id: "1",
      image: stats_1,
    },
    {
      title: "2.3 M",
      subtitle: t('StatsMundoCopy2'),
      id: "2",
      image: stats_1,
    },
    {
      title: "40 M",
      subtitle: t('StatsMundoCopy3'),
      id: "3",
      image: stats_1,
    },
  ];

  const statsAguaPotable = [
    {
      title: "20+",
      subtitle: t('StatsAguaPotableCopy1'),
      id: "1",
      image: stats_2
    },
    {
      title: "3,800 ",
      subtitle: t('StatsAguaPotableCopy2'),
      id: "2",
      image: stats_2
    },
    {
      title: "24.5 ",
      subtitle: t('StatsAguaPotableCopy3'),
      id: "3",
      image: stats_2
    },
  ];

  const statsAguaResidual = [
    {
      title: "20+",
      subtitle: t('StatsAguaResidualCopy1'),
      id: "1",
      image: stats_3
    },
    {
      title: "3,700 ",
      subtitle: t('StatsAguaResidualCopy2'),
      id: "2",
      image: stats_3
    },
    {
      title: "15.2",
      subtitle: t('StatsAguaResidualCopy3'),
      id: "3",
      image: stats_3
    },
  ];
  return (
    <section className="statsIqea">
      <div className="skewed">
        <div className="statsGroup">

            <CardStats arrData={statsMundo} />
            <CardStats arrData={statsAguaPotable} />
            <CardStats arrData={statsAguaResidual} />


        </div>
      </div>
    </section>
  );
}
