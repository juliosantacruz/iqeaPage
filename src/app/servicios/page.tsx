import { getServicios } from "@/services/fetchData";
import Link from "next/link";
import React from "react";

export default async function page() {


  const data = await getServicios();

  // console.log('data ------->',data);
  return (
    <section>
      <h3>test</h3>
      {data.map((servicio: any) => {
        const { titulo, slug } = servicio.attributes;
        // console.log("data --->", servicio.attributes);
        return (
          <article key={servicio.id}>
            <Link href={`servicios/${slug}`}>mira :D {titulo}</Link>
          </article>
        );
      })}
    </section>
  );
}

const datatest = {
  id: 2,
  attributes: {
    titulo: "Sistemas de alquiler DAF",
    descripcion:
      "IQEA ofrece en arrendamiento nuestro sistema DAF mejorado, líder en la industria. Nuestro modelo E-510 puede gestionar caudales de hasta 462 GPM. Se encuentran disponibles plazos de arrendamiento de 3 meses o más.",
    contenido:
      '<p>Los sistemas IQEA E-DAF son llave en mano y están diseñados para eliminar altos porcentajes de sólidos suspendidos (SST), demanda bioquímica de oxígeno insoluble (DBO) y grasas, aceites y grasas (FOG) de una corriente de aguas residuales. Cada sistema está completamente automatizado para brindarle a su operación una mejor agua efluente, así como menores costos de operación y mantenimiento. Nuestro sistema de alquiler actual está construido con acero inoxidable 316 resistente a la corrosión, tiene un entrepiso para caminar integrado con escaleras y un panel de control completamente precableado y programado. Viene completamente sobre patines y simplemente requiere conexiones de afluencia y efluente junto con una fuente de energía.</p><p>&nbsp;</p><figure class="table" style="width:42.72%;"><table class="ck-table-resized" style="border:1px solid rgba(0, 0, 0, 0.1);"><colgroup><col style="width:43.23%;"><col style="width:56.77%;"></colgroup><tbody><tr><td style="border:1px solid rgb(51, 51, 51);padding:3px;text-align:center;">Modelo</td><td style="border:1px solid rgb(51, 51, 51);padding:3px;text-align:center;">Disponibilidad</td></tr><tr><td style="border:1px solid rgb(51, 51, 51);padding:3px;text-align:center;">E-505</td><td style="border:1px solid rgb(51, 51, 51);padding:3px;text-align:center;">Enero, 2024</td></tr><tr><td style="border:1px solid rgb(51, 51, 51);padding:3px;text-align:center;">E-510</td><td style="border:1px solid rgb(51, 51, 51);padding:3px;text-align:center;">Noviembre, 2023</td></tr></tbody></table></figure><h2 style="margin-left:0px;"><strong>DAF Industries</strong></h2><p style="margin-left:0px;">Los sistemas IQEA E-DAF son una solución ideal de tratamiento de aguas residuales para las siguientes industrias:</p><ul><li>Procesamiento de carne/matadero (vacuno, porcino, ovino, caprino)</li><li>Procesamiento de helados</li><li>Procesamiento de aves de corral (pollos, pavo, pato, gansos)</li><li>Confitería/fabricación de dulces</li><li>Panadería/productos horneados</li><li>Industria del petróleo y el gas</li><li>Industria minera</li><li>Industria automotriz</li><li>Impresión (eliminación de tinta de aguas residuales)</li><li>Cereales y snacks</li><li>Procesamiento y envasado de alimentos.</li><li>Procesamiento de lácteos (leche, queso, yogur)</li><li>Fábricas de bebidas (cervecerías, jugos, refrescos)</li><li>Industria del papel y la celulosa</li><li>Chapado y acabado de metales</li><li>Industria química</li><li>Reciclaje de vidrio, plásticos, papel.</li><li>Procesamiento de huevos</li></ul><p>&nbsp;</p>',
    createdAt: "2023-11-03T17:19:16.152Z",
    updatedAt: "2023-11-03T17:32:18.173Z",
    publishedAt: "2023-11-03T17:30:03.441Z",
    slug: "sistemas-de-alquiler-daf",
  },
};

// console.log(datatest.attributes);
