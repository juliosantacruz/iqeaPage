import React from "react";
import "./SistemasDeTratamiento.scss";
import { getSistemasTratamiento } from "@/services/fetchData";
import Link from "next/link";

export default async function page() {
  const data = await getSistemasTratamiento();

  const arrSistemas = data.map((element: any) => {
    const newData = {
      id: element.id,
      title: element.attributes.titulo,
      slug: element.attributes.slug,
      description: element.attributes.descripcion,
    };
    return newData;
  });


  return (
    <section className="SistemasDeTratamientoPage">
      <div className="pageTitle">
        <h2>Sistemas de tratamiento</h2>
      </div>
      <div className="SistemasList">
        {arrSistemas.length > 0
          ? arrSistemas.map((element: any) => {
              return (
                <Link key={element.id} href={`/sistemas-de-tratamiento/${element.slug}`}>
                  <article>
                    <h4>{element.title}</h4>
                    <div className="descripcion">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: element.description,
                        }}
                      />
                    </div>
                  </article>
                </Link>
              );
            })
          : null}
      </div>
    </section>
  );
}
