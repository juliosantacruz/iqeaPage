import React from 'react'
import './sistemasDetail.scss'
import { getSistemasTratamientoBySlug } from '@/services/fetchData';

export default async function page({ params }: { params: { slug: string } }) {
  const data = await getSistemasTratamientoBySlug(params.slug);

  const {
    titulo:title,
    slug,
    descripcion:description,
    contenido:content,
  } = data.attributes;


  return (
    <section className='SistemasDetailPage'>

      <div className="pageTitle">
        <h2>{title}</h2>
      </div>

      {description && (
        <div className="descripcion">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      )}
      <hr />

      {content && (
        <div className="descripcion">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </section>
  )
}
