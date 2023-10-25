import React from 'react'
import './Projects.scss'
import CardProject from '@/components/CardProject'

export default function Projects() {
  return (
    <section className='projectsIqea'>
      <div className="headerProjects">
        <h2>
        PROYECTOS IQEA
        </h2>
        <p>
          Construimos sistemas de tratamiento de agua "llave en mano", elaboramos proyectos, y trabajamos en equipo. 
        </p>
      </div>

      <div className="bodyProjects ">
        <CardProject />
      </div>


    </section>
  )
}
 