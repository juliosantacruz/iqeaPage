import RevitModel from "@/components/RevitModel/RevitModel";
import React, { Suspense } from "react";
import "./Designs.scss";
import Loading from "@/components/RevitModel/loading";
import {useTranslations} from 'next-intl';

export default function Designs() {
  const t = useTranslations('Home');

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
