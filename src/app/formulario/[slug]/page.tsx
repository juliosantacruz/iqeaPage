import JSONForm from "@/components/JsonForm/JSONForm";
import { getFormularioBySlug } from "@/services/fetchData";
import './Formulario.scss'

import React from "react";

export default async function page({ params }: { params: { slug: string } }) {
    const data = await getFormularioBySlug(params.slug);
    const { attributes } = data;
    // console.log(query, data)

    const title = attributes.titulo;
    const formData = attributes.formularioJson.formData;
    const formUI = attributes.formularioJson.uiSchema;

    return (
        <section className="formPage">
            <h2>{title}</h2>

            <hr />
            <JSONForm jsonData={formData} jsonUI={formUI} title={title} />
        </section>
    ); 
}
