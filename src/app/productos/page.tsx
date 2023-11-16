import { getCatProductos } from '@/services/fetchData';
import Link from 'next/link';
import React from 'react'

export default async function page() {
  const data = await getCatProductos()
  
  // console.log(data)
  return (
    <section>
       <h3>test</h3>
      {data.map((servicio: any) => {
        const { title, slug } = servicio.attributes;
        return (
          <Link href={`/productos/${slug}`}>
            <article key={servicio.id}>{title}</article>

          </Link>
        );
      })}
    </section>
  )
}
