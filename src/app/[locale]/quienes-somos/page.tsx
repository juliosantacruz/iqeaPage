import React from "react";
import "./QuienesSomos.scss";
import CallToActionBanner from "@/components/CallToActionBanner";
import bgPattern from '@/assets/image-removebg-preview.png'

export default function page() {
  return (
    <section className="QSomospage" >
      <div className="pageTitle">
        <h1>Quienes Somos en IQEA</h1>
      </div>
      <div className="iqeaInfo">
        <div className="historia seccion">
          <h2>Ingeniería Química Electromecánica Ambiental</h2>
          <p>
            Surge en la Ciudad de Tijuana en el año 2005, tras la visión de un grupo de especialistas en el área de Tratamiento de Aguas al ver las necesidades de estas áreas en crecimiento acelerado de los sectores Industrial, habitacional y comercial de la región, formando un grupo de disciplinas a ofrecer de paquete completo, para que el cliente tenga el trato directo con el diseñador, suministrador ejecutor de obra.
          </p>
        </div>

        <div className="mision seccion" >
          <h2>Misión</h2>
          <p>
            La misión de IQEA es ofrecer a nuestros Clientes Ingeniería de
            Proyecto, Construcción de Calidad así como los suministros y
            mantenimiento, con una Solución de Respuesta Rápida de acuerdo a sus
            necesidades al mejor precio. Pensando siempre en la mejora de sus
            procesos que en cada diferente tipo de proyecto aplique y siempre
            pensando en el cuidado del Medio Ambiente.
          </p>
        </div>

        <div className=" seccion skewed" >
          <div className="vision statsGroup">
          <h2>Visión</h2>
          <p>
            La Visión de IQEA es ser una Empresa Líder a nivel regional con
            presencia nacional comprometida con el entorno. Que se distinga por
            mantener la mejor Calidad y Costos en sus Productos y Servicios así
            como el cuidado del Medio Ambiente.
          </p>
          </div>
        </div>
        <div className="seccion filosofia">
          <h2>Filosofía</h2>
          <p>
            Sabemos lo importante que es mantener la calidad del Agua en los
            procesos productivos y descargas normadas, ya que de ello dependerán
            los costos de operación y el impacto ambiental. En las áreas
            industrial, habitacional y comercial existen diferentes necesidades
            en el manejo del influente y efluente del Agua. Es nuestro objetivo
            ofrecer la mejor alternativa de tratamiento de Agua al menor costo
            de construcción y operación.
          </p>
        </div>
      </div>

      <CallToActionBanner />
    </section>
  );
}
