import React from "react";
import "./Stats.scss";
import CardStats from "@/components/CardStats";

import stats_1 from "@/assets/stats/stats1.svg";
import stats_2 from "@/assets/stats/stats2.svg";
import stats_3 from "@/assets/stats/stats3.svg";

const statsContent = [
  {
    title: "1,000+",
    subtitle:
      "Clientes de sector Industrial, Farmacologico, Alimenticio y Construccion",
    image: stats_1,
  },
  {
    title: "20+",
    subtitle: "Sistemas de tratamiento de agua potable",
    image: stats_2,
  },
  {
    title: "20+",
    subtitle: "Sistemas de tratamiento de agua residual",
    image: stats_3,
  },
];

export default function Stats() {
  return (
    <section className="statsIqea">
      <div className="skewed">
        <div className="statsGroup">
          {statsContent.map((data) => {
            return <CardStats data={data} key={data.image} />;
          })}
        </div>
      </div>
    </section>
  );
}
