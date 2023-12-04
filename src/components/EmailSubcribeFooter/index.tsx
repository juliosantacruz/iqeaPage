'use client'
import React, { FormEvent, useState }  from "react";
import vectorEmail from "@/assets/EmailSubcriptionVector.svg";
import Image from "next/image";
import "./EmailSubcribe.scss";
import { API_URL_STRAPI } from "@/config";
import axios from "axios";





export default  function EmailSubcribe() {
  const [success, segSuccess]=useState(false)


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    const email = (event.currentTarget.elements[0] as HTMLFormElement).value

    emailSubscription(email)
  }

  async function emailSubscription(email:string) {

    let data = JSON.stringify({
      "data": {
        "email": email
      }
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.API_URL_STRAPI}/newsfeeds`,
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };


    axios.request(config)
    .then((response) => {
      segSuccess(true)
      // console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  }




  return (
    <div className="SubcribeFooter">
      <div className="SubcribeContent">
        <div className="SubcribeText">
          <h3>
            Suscríbete a nuestro canal de noticias para que estes actualizado
          </h3>
        </div>
        {!success ? <form className="SubcribeInput" onSubmit={handleSubmit}>
          <input
            className="SubcribeInputElement"
            type="email"
            placeholder="Tu Correo Electronico"
          />

          <button className="SubcribeBtn" type="submit" >
            Suscribete
          </button>
        </form>:
        <h3>Gracias por suscribirte :D</h3>
        }

      </div>

    </div>
  );
}





