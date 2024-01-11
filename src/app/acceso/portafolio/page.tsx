import { getProyectos, getVisitasPortafolioBySlug } from '@/services/fetchData'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import './Portafolio.scss'
import CheckAuth from '@/components/CheckAuth/CheckAuth';



export  default async function Portafolio() {

  const proyectos = await getProyectos();

  const projectData = proyectos.map((project: any) => {
    const { titulo, slug, cover } = project.attributes;
    const coverImage = cover.data?.attributes.url;

    const newProject = {
      id: project.id,
      title: titulo,
      slug: slug,
      cover: coverImage,
      altText: cover.data?.attributes.alternativeText,
      tags: [],
    };
    return newProject;
  });

  return (
    <>

    <section className='PortafolioIqea'>

      <div className="pageTitle">
      <h1>Portafolio IQEA Ingenieria <CheckAuth/></h1>
      </div>

      <div className="portafolioGroup">
        {projectData.map((proyecto: any) => {
          return (
            <article className="proyectCard" key={proyecto.id}>
              <Link href={`/proyectos/${proyecto.slug}`}>
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
    </section>
    </>
  )
}
