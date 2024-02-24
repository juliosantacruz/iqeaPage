import { getProyectos } from "@/services/fetchData";
import Link from "next/link";
import React from "react";
import "./Proyectos.scss";
import CallToActionBanner from "@/components/CallToActionBanner";
import Image from "next/image";

export default async function page() {
  const data = await getProyectos();
  const projectData = data.map((project: any) => {
    const { titulo, slug, cover, isPublic } = project.attributes;
    const coverImage = cover.data?.attributes.url;

    const newProject = {
      id: project.id,
      title: titulo,
      slug: slug,
      isPublic:isPublic,
      cover: coverImage,
      altText: cover.data?.attributes.alternativeText,
      tags: [],
    };

      return newProject;


  }).filter((project:any) => !!project.isPublic)
  .sort((a:any, b:any)=> a.id - b.id)


  return (
    <section className="ProyectosPage">
      <div className="pageTitle">
        <h1>Proyectos IQEA</h1>
      </div>

      <div className="projectGroup">
        {projectData.map((proyecto: any) => {
          return (
            <article className="proyectCard" key={proyecto.id}>
              <Link href={`proyectos/${proyecto.slug}`}>
                {proyecto.cover && (
                  <Image
                    src={proyecto.cover}
                    alt="imagen cover para proyectos"
                    width={400}
                    height={400}
                  />
                )}
                <h4>{proyecto.title}</h4>
              </Link>
            </article>
          );
        })}
      </div>
      <CallToActionBanner />
    </section>
  );
}
