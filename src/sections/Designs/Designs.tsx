import RevitModel from "@/components/RevitModel/RevitModel";
import React, { Suspense } from "react";
import "./Designs.scss";
import Loading from "@/components/RevitModel/loading";

export default function Designs() {
  return (
    <section className="ModelDesigns">
      <div className="ModelAccents">
        <div className="textContent">
          <h2>IQEA Diseño e Ingenieria</h2>
          <p>
            En IQEA diseñamos y construimos las soluciones a tus problemas,
            proyectamos con la metodologia BIM en mente y modelamos a tu medida.
            Contamos con mas de 15 años de experiencia y nos mantenemos
            actulizados con la ultima tecnologia.
          </p>
        </div>
        <div className="modelContent">
          <Suspense fallback={<Loading />}>
            <RevitModel />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
