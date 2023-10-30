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
          Minim deserunt occaecat veniam anim eiusmod eu cupidatat anim eiusmod excepteur. Quis proident fugiat enim incididunt ut quis velit sint non non veniam eiusmod reprehenderit. Aliqua ipsum incididunt aliquip laboris sint deserunt elit tempor officia ex elit. Ullamco sit est in elit aliquip sit veniam quis veniam.
        </p>
      </div>

      <div className="bodyProjects ">
        <Slideshow 
          autoplay={false} 
          controls={false} 
          styleProps={{ width: "100%", height:'460px',overflowX:'scroll', scrollbarWidth:'none' }}
          slideContainerWidth={400} slideContainerHeight={460}>
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
