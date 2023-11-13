"use client";
import axios from "axios";
import React, { useState } from "react";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";
import "./JSONForm.scss";

export default function JSONForm({ jsonData, jsonUI, title }: any) {
    
    const [formData, setFormData] = useState(null);
    const handlerOnSubmit = () => {
        console.log(formData);

        let data = JSON.stringify({
            data: {
                title:title,
                data: {
                    formData,
                },
            },
        });

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${process.env.API_URL_STRAPI}/formularios-recibidos`,
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
            uiSchema={jsonUI}
            onChange={(e) => setFormData(e.formData)}
            onSubmit={handlerOnSubmit}
        // onError={log("errors")}
        />
    );
}
