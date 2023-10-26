"use client";
import React from "react";
import "./Projects.scss";
import CardProject from "@/components/CardProject";
import { Slide, Slideshow } from "@/components/Slideshow";

export default function Projects() {
  return (
    <section className="projectsIqea">
      <div className="headerProjects">
        <h2>PROYECTOS IQEA</h2>
        <p>
          Construimos sistemas de tratamiento de agua "llave en mano",
          elaboramos proyectos, y trabajamos en equipo.
        </p>
      </div>

      <div className="bodyProjects ">
        <Slideshow autoplay={true} controls={false} styleProps={{ width: "380px", overflowX:'scroll', scrollbarWidth:'none' }}>
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
    </section>
  );
}
