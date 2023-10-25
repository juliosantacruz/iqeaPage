import React from 'react'
import './AboutUs.scss'
import Image from 'next/image'
import imgSample from '@/assets/servicios/ImgVt1.jpeg'

export default function AboutUs() {
  return (
    <section className='aboutUsIqea'>
      <div className="content">
        <h2>
          IQEA Calidad y Compromiso
        </h2>
        <p>
        IQEA surge tras la visión de un grupo de especialistas en el área de Tratamiento de Aguas al ver las necesidades de estas áreas en crecimiento acelerado de los sectores Industrial, habitacional y comercial de la región, formando un grupo de disciplinas a ofrecer de paquete completo, para que el cliente tenga el trato directo con el diseñador, suministrador ejecutor de obra.
        </p>
        <div className="aboutUsBtn">
          <button type='button'>Cotiza tu Proyecto</button>
        </div>
      </div>
      <div className="carrusel centerDiv">
        <Image src={imgSample} alt='' />
      </div>
    </section>
  )
}
 