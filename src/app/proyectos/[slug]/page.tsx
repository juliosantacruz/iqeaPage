import { getProyectosBySlug } from "@/services/fetchData";
import React from "react";
import "./ProyectosDetail.scss";
import CallToActionBanner from "@/components/CallToActionBanner";
import Image from "next/image";

export default async function page({ params }: { params: { slug: string } }) {
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
  };
  // console.log(project)

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
      {project.galery && (
        <>
          <hr className="projectSeparator" />
          <div className="galeria">
            {project?.galery?.map((image: any) => {
              // console.log('imagen nueva --------->',image.attributes)
              return (
                //
                <div key={image.id}>
                  <Image
                    src={image.attributes.url}
                    alt={
                      image.attributes.alternativeText
                        ? image.attributes.alternativeText
                        : "galeria"
                    }
                  />
                </div>
              );
            })}
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
            <p className="projectData">{project.client}</p>
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
      <CallToActionBanner />
    </section>
  );
}
