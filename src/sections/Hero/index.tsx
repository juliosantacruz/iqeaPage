 
import React from "react";
import heroSampleImg from "@/assets/hero/heroImage1-min.jpg";
import HeroCard from "@/components/HeroCard";

export default function Hero() {
const heroSample= {
  id: 1,
  image: heroSampleImg,
  title: "Tratamiento de aguas",
  description:
    "La principal especialidad de IQEA dentro del área de  servicios son los proyectos “llave en mano” para el  tratamiento de agua o aguas residuales.",
}


  return (
    <section className="Hero">
      <HeroCard HeroData={heroSample} />
    </section>
  );
}

// -------------

