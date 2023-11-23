import { getProyectos } from "@/services/fetchData";
import Link from "next/link";
import React from "react";
import "./Proyectos.scss";
import CallToActionBanner from "@/components/CallToActionBanner";

export default async function page() {
  const data = await getProyectos();
  const projectData = data.map((project:any)=>{
    const { titulo, slug, cover } = project.attributes;
    const coverImage = cover.data?.attributes.url

    const newProject={
      id:project.id,
      title:titulo,
      slug:slug,
      cover:coverImage,
      altText:cover.data?.attributes.alternativeText
    }
    return newProject
  })

  return (
    <section className="ProyectosPage">
      <div className="pageTitle">
        <h2>Proyectos IQEA</h2>
      </div>

      <div className="projectGroup">
      {projectData.map((proyecto: any) => {

        return (
          <article className="proyectCard" key={proyecto.id}>
              <Link href={`proyectos/${proyecto.slug}`}  >
              {proyecto.cover && (
                <img src={proyecto.cover} alt="imagen cover para proyectos" />
              )}
              <h4>{proyecto.title}</h4>
          </Link>
            </article>
        );
      })}

      </div>
      <CallToActionBanner/>
    </section>
  );
}
