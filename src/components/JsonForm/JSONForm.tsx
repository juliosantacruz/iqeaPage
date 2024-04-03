"use client";
import axios from "axios";
import React, { useState } from "react";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";
import "./JSONForm.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function JSONForm({ jsonData, jsonUI, title }: any) {
  const [formData, setFormData] = useState(null);
  const handlerOnSubmit = () => {
    console.log(formData);

    let data = JSON.stringify({
      data: {
        title: title,
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
        // console.log(response)
        if (response.status === 200) {
          // console.log(JSON.stringify(response.data));
          notify();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const notify = () =>
    toast.success("Mensaje Enviado", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <>
      <ToastContainer />

      <Form
        schema={jsonData}
        validator={validator}
        uiSchema={jsonUI}
        onChange={(e) => setFormData(e.formData)}
        onSubmit={handlerOnSubmit}
        // onError={log("errors")}
      />
    </>
  );
}
