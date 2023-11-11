
import formData from "./../../formsJson/reverseOsmosisForm.json";
import JSONForm from "@/components/JsonForm/JSONForm";
import JsonUI from "./../../formsJson/UISchemaReverseOsmosis.json";


import React from "react";



export default async function page({ params }: { params: { slug: string } }) {
    // console.log(data);

    return (
        <section>
            <h2>Formulario</h2>

            <hr />
            <JSONForm jsonData={formData} jsonUI={JsonUI}/>
        </section>
    );
}
