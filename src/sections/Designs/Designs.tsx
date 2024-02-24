import RevitModel from "@/components/RevitModel/RevitModel";
import React, { Suspense } from "react";
import "./Designs.scss";
import Loading from "./loading";

export default function Designs({t}:any) {
  return (
    <section className="ModelDesigns">
      <div className="ModelAccents">
        <div className="textContent">
          <h2>{t('DesignTitle')}</h2>
          <p>{t('DesignContent')}</p>
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
