 "use client"
import React from "react";
import HeroCard from "@/components/HeroCard";
import { Slide, Slideshow } from "@/components/Slideshow";
import hero1 from "@/assets/hero/heroImage1-min.jpg";
import hero2 from "@/assets/hero/heroImage2-min.jpg";
import hero3 from "@/assets/hero/heroImage3-min.jpg";
import hero4 from "@/assets/hero/heroImage4-min.jpg";
import hero5 from "@/assets/hero/heroImage5-min.jpg";
import Hero2 from "../Hero2";


export default function Hero() {
  const heroArray = [
    {
      id: 1,
      image: hero1,
      title: "Tratamiento de aguas",
      description:
        "La principal especialidad de IQEA dentro del área de  servicios son los proyectos “llave en mano” para el  tratamiento de agua o aguas residuales.",
    },
    {
      id: 2,
      image: hero2,
      title: "Experiencia IQEA",
      description:
        "Limpiamos el planeta, tenemos experiencia diseniando y construyendo sistemas de tratamiento de agua y procesos, resolviendo los retos mas complejos , contamos con un portafolio de soliciones concretas para tu proyecto ",
    },
    {
      id: 3,
      image: hero3,
      title: "Tratamiento de aguas",
      description:
        "La principal especialidad de IQEA dentro del área de  servicios son los proyectos “llave en mano” para el  tratamiento de agua o aguas residuales.",
    },
    {
      id: 4,
      image: hero4,
      title: "Tratamiento de aguas",
      description:
        "La principal especialidad de IQEA dentro del área de  servicios son los proyectos “llave en mano” para el  tratamiento de agua o aguas residuales.",
    },
    {
      id: 5,
      image: hero5,
      title: "Ingenieria de Proyecto",
      description:
        "Ingeniería Química Electromecánica Ambiental (IQEA) es una empresa mexicana que se dedica principalmente al tratamiento de aguas y aguas residuales.",
    },
  ];
  
 

  return (<Hero2 />
    // <section className="Hero">
    // <HeroCard HeroData={heroArray[1]} />
    
    //   <Slideshow autoplay={true} controls={false} animationTime={800} transitionTime={8000}>
        
    //       {heroArray &&
    //         heroArray.map((element)=>{
               
              
    //           return(
    //             <Slide key={element.id}><HeroCard HeroData={element} /> </Slide>)
    //         })
    //       }
        

       

    //   </Slideshow>

    // </section>
  );
}

// -------------

