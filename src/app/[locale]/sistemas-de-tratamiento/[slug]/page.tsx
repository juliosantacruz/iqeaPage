import React from 'react'
import './sistemasDetail.scss'
import { getSistemasTratamientoBySlug } from '@/services/fetchData';
import CallToActionBanner from '@/components/CallToActionBanner';

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

          <div className="descripcion" dangerouslySetInnerHTML={{ __html: description }} />

      )}
      <hr />

      {content && (

          <div className="contenido" dangerouslySetInnerHTML={{ __html: content }} />

      )}
      <CallToActionBanner/>
    </section>
  )
}
