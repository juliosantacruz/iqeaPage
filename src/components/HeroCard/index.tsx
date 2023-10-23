'use client'
import React, { useEffect, useState } from 'react'
import { StaticImageData } from "next/image";
import hero1 from "@/assets/hero/heroImage1-min.jpg";
import hero2 from "@/assets/hero/heroImage2-min.jpg";
import hero3 from "@/assets/hero/heroImage3-min.jpg";
import hero4 from "@/assets/hero/heroImage4-min.jpg";
import hero5 from "@/assets/hero/heroImage5-min.jpg";
import './HeroCard.scss'


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
    id: 3,
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

type HeroData= { id: number; image: StaticImageData; title: string; description: string };
type PropsHeroCard = {
    HeroData:HeroData
};

 



export default function HeroCard({ HeroData }: PropsHeroCard)  {
    const [index, setIndex] =useState(0)
    const [data, setData]=useState<HeroData>(heroArray[index])
   
    const nextImage=()=>{
        
        // setIndex(heroArray.indexOf(data)+1)
        const localArr = [0,1,2,3,4]
        
        
        if(index < localArr.length){
            setData(heroArray[index])
            setIndex(index+1)

        }
        if(index===localArr.length){
            setData(heroArray[0])
            setIndex(0)
        }
        
        console.log('index',index)




    }

        



    const bgImage = { backgroundImage: `url(${data.image.src})`}
    return (
      <div className="HeroCard" style={bgImage}>
        <div className="HeroInfo">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </div>
    );
  };


 