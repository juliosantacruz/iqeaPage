import React from "react";
import JSONForm from "@/components/JsonForm/JSONForm";
import { getFormularioBySlug } from "@/services/fetchData";
import "./Formulario.scss";
import jsonDataDev from "../../../formsJson/contactSettlingClarifierSystem.json";
import form1 from "@/formsJson/contactBiologicalTreatmentForm.json";
import form2 from "@/formsJson/contactAnaerobicRequestForm.json";
import form3 from "@/formsJson/contactSettlingClarifierSystem.json";
import form4 from "@/formsJson/contactReverseOsmosisForm.json";

export const FORM_ROUTER = [
    {
        id: "1",
        title: "Biological Treatment Background",
        slug: "biological-treatment-background",
        formData: form1,
    },
    {
        id: "2",
        title: "Anaerobic Request Form",
        slug: "anaerobic-request-form",
        formData: form2,
    },
    {
        id: "3",
        title: "Settling Clarifier System",
        slug: "settling-clarifier-system",
        formData: form3,
    },
    {
        id: "4",
        title: "Reverse Osmosis Design Request",
        slug: "reverse-osmosis-design-request",
        formData: form4,
    },
];

export default async function page({ params }: { params: { slug: string } }) {
    // const data = await getFormularioBySlug(params.slug);
    // const { attributes } = data;
    // // console.log(query, data)

    // Strapi Variables
    // const title = attributes.titulo;
    // const formData = attributes.formularioJson.formData;
    // const formUI = attributes.formularioJson.uiSchema;

    // Developer variables
    // const title = jsonDataDev.formData.title
    // const formData = jsonDataDev.formData
    // const formUI = jsonDataDev.uiSchema

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
