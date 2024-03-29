import { getProyectosBySlug, getProyectosNavigator } from "@/services/fetchData";
import React from "react";
import "./ProyectosDetail.scss";
import CallToActionBanner from "@/components/CallToActionBanner";
import Image from "next/image";
import SlideGallery from "@/components/SlideGallery/SlideGallery";
import ProjectNavigator from "@/components/ProjectNavigator/ProjectNavigator";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getProyectosBySlug(params.slug);


  const project = {
    title: data.attributes.titulo,
    description: data.attributes.descripcion,
    cover: data.attributes.cover?.data.attributes.url,
  };
  return {
    title: project.title,
    description: data.attributes.descripcion,
    openGraph: {
      title: project.title,
      description:
        "Iqea es una compania mexicana que desarrolla sistemas de purificacion y tratamiento de agua, haciendo uso de metodos de ultima generacion como Osmosis inversa o Electrocuagulacion garantizamos la calidad de su proyecto",
      url: "/",
      siteName: "IQEA Ingenieria Quimica Electromicanica Ambiental",
      images: [
        {
          url: project.cover
            ? `${project.cover}`
            : "/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqhvp0atv%2Fimage%2Fupload%2Fv1700861892%2F2_41ea60e311.jpg&w=2048&q=75",
          width: 1280,
          height: 800,
        },
      ],
      locale: "es-MX",
      type: "website",
    },
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const dataNavigator = await getProyectosNavigator()

  const data = await getProyectosBySlug(params.slug);
  const project = {
    id: data.id,
    title: data.attributes.titulo,
    client: data.attributes.cliente,
    comercialSector: data.attributes.sector_comercial,
    systemtype: data.attributes.tipo_sistema,
    projectScope: data.attributes.alcance,
    year: data.attributes.anio_de_construccion,
    coParticipation: data.attributes.coparticipacion,
    projectCapacity: data.attributes.capacidad,
    location: data.attributes.ubicacion,
    description: data.attributes.descripcion,
    galery: data.attributes.galeria?.data,
    cover: data.attributes.cover?.data,
  };

  return (
    <section className="projectDetailPage">
      <div className="pageTitle">
        <h2>Proyectos IQEA</h2>
        <p>
          Durante años, hemos estado comprometidos con la misión de proporcionar
          soluciones innovadoras y sostenibles para el tratamiento del agua,
          ayudando a preservar este recurso vital para las generaciones futuras.
        </p>
      </div>
      {project.galery ? (
        <>
          <hr className="projectSeparator" />
          <div className="galeria">
            <SlideGallery imageArr={project.galery} />
          </div>
        </>
      ) : (
        <>
          <hr className="projectSeparator" />
          <div className="coverImage">
            <img
              src={project.cover.attributes.url}
              alt={
                project.cover.attributes.alternativeText
                  ? project.cover.attributes.alternativeText
                  : "imagen de proyecto"
              }
            />
          </div>
        </>
      )}
      <div className="projectTitle">
        <h3>{project.title}</h3>
      </div>

      <div className="projectInfo">
        <div className="projectInfoLeft">
          <div className="projectDatarow">
            <p className="dataTitle"> Cliente:</p>
            <p className="projectData">{project.client}</p>
          </div>
          <div className="projectDatarow">
            <p className="dataTitle"> Tipo de Proyecto: </p>
            <p className="projectData">{project.comercialSector}</p>
          </div>
          <div className="projectDatarow">
            <p className="dataTitle"> Tipo de Sistema: </p>
            <p className="projectData">{project.comercialSector}</p>
          </div>
          <div className="projectDatarow">
            <p className="dataTitle"> Capacidad:</p>
            <p className="projectData">{project.projectCapacity}</p>
          </div>
          <div className="projectDatarow">
            <p className="dataTitle"> Ubicacion:</p>
            <p className="projectData">{project.location}</p>
          </div>
        </div>

        <div className="projectInfoRight">
          <div className="projectDatarow">
            <p className="dataTitle"> Alcances: </p>
            <p className="projectData">{project.projectScope}</p>
          </div>
          <div className="projectDatarow">
            <p className="dataTitle"> Año de Construccion: </p>
            <p className="projectData">{project.year}</p>
          </div>
          <div className="projectDatarow">
            <p className="dataTitle"> Coparticipacion: </p>
            <p className="projectData">{project.comercialSector}</p>
          </div>

          <div className="projectDatarow projectDescription">
            <p className="dataTitle">Descripcion de Proyecto:</p>
            <div
              className="projectDataDescription"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </div>
        </div>
      </div>
      <ProjectNavigator data={dataNavigator}/>
      <CallToActionBanner />
    </section>
  );
}
