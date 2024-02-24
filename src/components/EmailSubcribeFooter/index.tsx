'use client'
import React, { FormEvent, useState }  from "react";
import vectorEmail from "@/assets/EmailSubcriptionVector.svg";
import Image from "next/image";
import "./EmailSubcribe.scss";
import { API_URL_STRAPI } from "@/config";
import axios from "axios";
import { useTranslation } from "react-i18next";





export default  function EmailSubcribe() {
  const [success, segSuccess]=useState(false)
  const { t } = useTranslation();


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
          <h3>{t('common:ContactSubscriptionTitle')}</h3>
        </div>
        {!success ? <form className="SubcribeInput" onSubmit={handleSubmit}>
          <input
            className="SubcribeInputElement"
            type="email"
            placeholder={t('common:ContactSubscriptionPlaceHolder')}
          />

          <button className="SubcribeBtn" type="submit" >
          {t('common:ContactSubscriptionBtn')}
          </button>
        </form>:
        <h3>{t('common:ContactSubscriptionMessage')}</h3>
        }

      </div>

    </div>
  );
}





