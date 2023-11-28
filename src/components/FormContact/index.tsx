"use client";
import React, { useState } from "react";
import "./FormContact.scss";
import IconArrowRight from "../Icons/IconArrowRight";
import axios from "axios";

type FormData = {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
};

export default function FormContact() {
  const [success, setSuccess]=useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget.elements)
    const data = {
      nombre: (event.currentTarget.elements[0] as HTMLFormElement).value,
      email: (event.currentTarget.elements[1] as HTMLFormElement).value,
      asunto: (event.currentTarget.elements[2] as HTMLFormElement).value,
      mensaje: (event.currentTarget.elements[3] as HTMLFormElement).value,
    };


    postContactForm(data);
  };

  async function postContactForm(data: FormData) {


    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.API_URL_STRAPI}/formulario-contactos`,
      headers: {
        "Content-Type": "application/json",
      },
      data:{data},
    };

    axios.request(config)
    .then((response) => {
      setSuccess(true)

    })
    .catch((error) => {
      console.log(error);
    });

  }

  return (
    <div className="contactFormWrapper">
      {!success?<form className="contactFormForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <div className="inputRow">
            <label htmlFor="">Nombre *</label>
            <input type="text" name="nombre" id="nombre" required/>
          </div>

          <div className="inputRow">
            <label htmlFor="">Correo Electronico *</label>
            <input type="email" name="email" id="email" required/>
          </div>

          <div className="inputRow">
            <label htmlFor="">Asunto *</label>
            <input type="text" name="asunto" id="asunto" required/>
          </div>

          <div className="inputRow ">
            <label htmlFor="">Mensaje *</label>
            <textarea name="mensaje" id="mensaje" required></textarea>
          </div>
          <div className="btnSubmit">
            <button type="submit">
              Enviar <IconArrowRight />
            </button>
          </div>
        </div>
      </form> :
      <SendMessage/>
      }
    </div>
  );
}


const SendMessage =()=>{


  return(
    <div className="sendMessage">
      <h2>Gracias, nos pondremos en contacto contigo pronto..!</h2>
    </div>
  )
}
