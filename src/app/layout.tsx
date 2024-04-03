import React from "react";
import type { Metadata } from "next";
import Footer from "@/layout/Footer";
import "./globals.scss";
import "../sections/Hero/Hero.scss";
import Navbar from "@/layout/Navbar/Navbar";
import WhattsButton from "@/components/WhattsButton/WhattsButton";
import Header from "@/layout/Navbar/Header";

import { GoogleAnalytics } from '@next/third-parties/google';


// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL||'https://iqea.mx'),
  title: "Iqea Limpiamos el Agua",
  description:
    "La especialidad de IQEA dentro del área de  servicios son los proyectos “llave en mano” para el  tratamiento de agua o aguas residuales. Para ello  utilizamos combinaciones de tecnologías en la  realización de proyectos maestros en conjunto para  tratar el agua.",
  openGraph:{
    title:'IQEA cuidamos el Agua',
    description:'Iqea es una compania mexicana que desarrolla sistemas de purificacion y tratamiento de agua, haciendo uso de metodos de ultima generacion como Osmosis inversa o Electrocuagulacion garantizamos la calidad de su proyecto',
    url:'/',
    siteName:'IQEA Ingenieria Quimica Electromicanica Ambiental',
    images:[{
      url:'/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqhvp0atv%2Fimage%2Fupload%2Fv1700861892%2F2_41ea60e311.jpg&w=2048&q=75',
      width:1280,
      height:800
    },{
      url:'/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqhvp0atv%2Fimage%2Fupload%2Fv1700861894%2F3_e69f21f53c.jpg&w=2048&q=75',
      width:1280,
      height:800
    },{
      url:'/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImgVt1.f07875a4.jpeg&w=1920&q=75',
      width:1280,
      height:800
    }],
    locale:'es-MX',
    type:'website',

  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iqea Limpiamos el Agua',
    description: 'La especialidad de IQEA dentro del área de  servicios son los proyectos “llave en mano” para el  tratamiento de agua o aguas residuales. Para ello  utilizamos combinaciones de tecnologías en la  realización de proyectos maestros en conjunto para  tratar el agua.',

    images: ['/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqhvp0atv%2Fimage%2Fupload%2Fv1700861892%2F2_41ea60e311.jpg&w=2048&q=75'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {




  return (
    <html lang="es">
      <body className={"body"}>
        <Header />
        {children}
        <WhattsButton/>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-SLFXCNT39L" />

    </html>
  );
}
