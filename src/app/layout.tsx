import React from 'react'
import type { Metadata } from 'next'
import NavbarSSC from '@/layout/NavbarSSC'
import Footer from '@/layout/Footer'
import Head from 'next/head'
import './globals.scss'
import '../sections/Hero/Hero.scss'
import Navbar from '@/layout/Navbar'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iqea Limpiamos el Agua',
  description: 'La principal especialidad de IQEA dentro del área de  servicios son los proyectos “llave en mano” para el  tratamiento de agua o aguas residuales. Para ello  utilizamos combinaciones de tecnologías en la  realización de proyectos maestros en conjunto para  tratar el agua.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Head>
      
    
        <meta name="description" content="take control of your money" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         
     
      </Head>
      <body className={'body'}>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
