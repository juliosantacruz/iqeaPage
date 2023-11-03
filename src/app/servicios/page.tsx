import React from 'react'

export default async function page() {

  async function getData() {
    const res = await fetch('http://localhost:1337/api/servicios/1')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


  
  const data = await getData()
  const textContent = data.data.attributes.contenido
  
  console.log(data)
  return (
    <section>
      <h2>{data?.data?.attributes?.titulo}</h2>
       
      {data?.data?.attributes?.descripcion}
      <hr />
      <div dangerouslySetInnerHTML={{ __html: textContent }} />
    </section>
  )
}
