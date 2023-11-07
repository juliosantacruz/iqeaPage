import { getProductos } from '@/services/fetchData';
import React from 'react'

export default async function page() {
  const data = await getProductos()
  return (
    <section>
       <h3>test</h3>
      {data.map((servicio: any) => {
        const { titulo } = servicio.attributes;
        // console.log("data --->", servicio.attributes);
        return (
          <article key={servicio.id}>{titulo}</article>
        );
      })}
    </section>
  )
}
