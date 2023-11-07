import React from "react";

export default async function page() {
  async function getData() {
    const res = await fetch("http://localhost:1337/api/servicios/2");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const { data } = await res.json();
    return data;
  }

  const data = await getData();
  const textContent = data.attributes.contenido;
  
  console.log(data);
  return (
    <section>
      <h2>{data?.attributes?.titulo}</h2>

      {data?.attributes?.descripcion}
      <hr />
      <div dangerouslySetInnerHTML={{ __html: textContent }} />
    </section>
  );
}
