'use client'
import React from 'react'
import {FloatingWhatsApp} from "react-floating-whatsapp";
import whattsappAvatar from "@/assets/iqea_logo.png";


export default function WhattsButton() {


    //whattsApp Config
const phoneNumber = "526642171518";
const accountName = "IQEA";
const statusMessage = "Tiempo de respuesta: 15 min.";
const chatMessage = "Hola 😃 \n como te puedo ayudar? ";
const className = {zIndex: "1000"};



  return (

    <FloatingWhatsApp
    phoneNumber={phoneNumber}
    accountName={accountName}
    avatar={whattsappAvatar.src}
    statusMessage={statusMessage}
    chatMessage={chatMessage}
    allowClickAway={true}
    style={className}
  />
  )
}
