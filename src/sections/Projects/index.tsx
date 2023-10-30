"use client";
import React from "react";
import "./Projects.scss";
import CardProject from "@/components/CardProject";
import { Slide, Slideshow } from "@/components/Slideshow";
import ButtonStyle from "@/components/ButtonStyle";

export default function Projects() {
  return (
    <section className="projectsIqea">
      <div className="headerProjects centerDiv">
        <h2>PROYECTOS IQEA</h2>
        <p>
          Construimos sistemas de tratamiento de agua "llave en mano",
          elaboramos proyectos, y trabajamos en equipo.
        </p>
      </div>

      <div className="bodyProjects ">
        <Slideshow 
          autoplay={false} 
          controls={false} 
          styleProps={{ width: "100%", overflowX:'scroll', scrollbarWidth:'none' }}
          slideContainerWidth={400}>
          <Slide>
            <CardProject />
          </Slide>{" "}
          <Slide>
            <CardProject />
          </Slide>{" "}
          <Slide>
            <CardProject />
          </Slide>{" "}
          <Slide>
            <CardProject />
          </Slide>{" "}
          <Slide>
            <CardProject />
          </Slide>{" "}
          <Slide>
            <CardProject />
          </Slide>
        </Slideshow>
      </div>
      <ButtonStyle>
        <button style={{maxWidth:'350px', margin:"30px 0"}}>Ver Mas</button>

      </ButtonStyle>
      
    </section>
  );
}
