"use client"
import React from "react";
import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";
import logoIqea from "@/assets/iqea_logo.png";
import logoJSdev from "@/assets/logo_450x200_azul_trans.png";

import IconFacebook from "@/components/Icons/IconFacebook";
import IconLinkedIn from "@/components/Icons/IconLinkedIn";
import IconWhattsapp from "@/components/Icons/IconWhattsapp";
import IconInstagram from "@/components/Icons/IconInstagram";
import IconPin from "@/components/Icons/IconPin";
import IconPhone from "@/components/Icons/IconPhone";
import IconMail from "@/components/Icons/IconMail";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();


  const isActiveLink = (value: string) => {
    return `footerNav ${value === path ? "active" : ""}`;
  };

  return (
    <footer className="iqeaFooter">
      <div className="footerHeader">
        <div className="iqeaLogo">
          <Image src={logoIqea} alt="logo" className="logoIqea" />
        </div>
        <div className="redesSociales">
          <ul>
            <li>
              <a href="/" className="socialLinks">
                <IconWhattsapp />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/arturo-chavez-90979258/" target="_blank" className="socialLinks">
                <IconLinkedIn />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100064039061566" target="_blank" className="socialLinks">
                <IconFacebook />
              </a>
            </li>
            <li>
              <a href="/" className="socialLinks">
                <IconInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footerSeparator" />
      <div className="footerBody">
        <div className="contact">
          <h4>Contacto</h4>
          <div className="direccion ">
            <IconPin className="footerIcon" />
            <div className="contactRow">
              <p> Callejón Manuel M. Doria No. 12612</p>
              <p>Col. Libertad 22400. Tijuana, B.C., México.</p>
            </div>
          </div>
          <div className="telefono ">
            <IconPhone className="footerIcon" />
            <div className="contactRow">
              <p>+52 (664) 210-1017</p>
              <p>+52 (664) 609-4415</p>
            </div>
          </div>
          <div className="email ">
            <IconMail className="footerIcon" />
            <p>info@iqea.mx</p>
          </div>
        </div>
        <div className="navbar">
          <Link href={"/"} className={isActiveLink("/")}>
            Inicio
          </Link>
          <Link href={"/quienes-somos"} className={isActiveLink("/quienes-somos")}>
            Quienes Somos
          </Link>
          <Link href={"/servicios"} className={isActiveLink("/servicios")}>
            Servicios
          </Link>
          <Link href={"/productos"} className={isActiveLink("/productos")}>
            Productos
          </Link>

          <Link href={"/proyectos"} className={isActiveLink("/proyectos")}>
            Proyectos
          </Link>
          <Link href={"/contacto"} className={isActiveLink("/contacto")}>
            Contacto
          </Link>
        </div>
      </div>
      <div className="footerFooter">
        <div className="legend">
          <p>© 2023 Todos los derechos reservados IQEA </p>
        </div>
        <div className="develop">
          <p>sitio desarrollado por </p>
          <Link href={"https://juliosantacruz.dev"} target="_blank">
            <Image src={logoJSdev} alt="logoJSdev" className="jsdevLogo" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
