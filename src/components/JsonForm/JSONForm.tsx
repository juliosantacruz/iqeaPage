"use client";
import React from "react";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";
import "./JSONForm.scss";

export default function JSONForm({ jsonData, JsonUI }: any) {
    const log = (type: string) => console.log.bind(console, type);

    return (
        <Form
            schema={jsonData}
            validator={validator}
            uiSchema={JsonUI}
            // onChange={log("changed")}
            onSubmit={log("submitted")}
        // onError={log("errors")}
        />
    );
}
