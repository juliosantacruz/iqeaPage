'use client'

import React, { useState } from "react";
import "./Navbar.scss";
import Link from "next/link";
import {  usePathname } from 'next/navigation';
import Image from "next/image";
import logoIqea from "@/assets/iqea_logo.png";
import IconMenu from "@/components/Icons/IconMenu";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const path =  usePathname() 

const isActiveLink = (value:string) =>{
  return `navLink ${value===path?'active':''}`
}
const handlerMenu=()=>{
  setOpenMenu(!openMenu)
  console.log(openMenu)
}

  return (
    <header>
      <nav className="navbar">
        <div className="iqeaLogo">
          <Image src={logoIqea} alt="logo" className="logoIqea" />
        </div>
        <div className="movilMenu">
          <button onClick={handlerMenu} className="buttonMenu">
            <IconMenu className="hamburger"/>

          </button>
        </div>
        <ul className={`navLinks ${openMenu?'openMenu':''}`}>
          <li>
            <Link href="/" className={isActiveLink('/')}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href='/quienes-somos' className={isActiveLink('/quienes-somos')}>
              Quiénes Somos
            </Link>
          </li>
          <li>
            <Link href="/servicios" className={isActiveLink('/servicios')}>
              Servicios
            </Link>
          </li>
          <li>
            <Link href='/productos' className={isActiveLink('/productos')}>
              Productos
            </Link>
          </li>
          <li>
            <Link href="/proyectos" className={isActiveLink('/proyectos')}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/contacto" className={isActiveLink('/contacto')}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
