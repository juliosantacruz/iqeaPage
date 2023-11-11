"use client";
import axios from "axios";
import React, { useState } from "react";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";
import "./JSONForm.scss";

export default function JSONForm({ jsonData, JsonUI }: any) {
    const [formData, setFormData] = useState(null);
    const handlerOnSubmit = () => {
        console.log(formData);

        
        let data = JSON.stringify({
            data: {
                formulario: {
                    formData
                },
            },
        });

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${process.env.API_URL_STRAPI}/formularios`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Form
            schema={jsonData}
            validator={validator}
            uiSchema={JsonUI}
            onChange={(e) => setFormData(e.formData)}
            onSubmit={handlerOnSubmit}
        // onError={log("errors")}
        />
    );
}
