import React from "react";
import JSONForm from "@/components/JsonForm/JSONForm";
// import { getFormularioBySlug } from "@/services/fetchData";
import "./Formulario.scss";
import jsonDataDev from "@/formsJson/contactSettlingClarifierSystem.json";
import { FORM_ROUTER } from "@/services/routers";




export default async function page({ params }: { params: { slug: string } }) {


    // new Test Router
    const formObj = FORM_ROUTER.find((element) => element.slug === params.slug);
    const title = formObj?.formData.formData.title;
    const formData = formObj?.formData.formData;
    const formUI = formObj?.formData.uiSchema;

    return (
        <section className="formPage">
            <h2>{title}</h2>

            <hr />
            <JSONForm jsonData={formData} jsonUI={formUI} title={title} />
        </section>
    );
}
