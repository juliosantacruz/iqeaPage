"use client";
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
import IconYoutube from "@/components/Icons/IconYouTube";

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
              <a href="https://www.youtube.com/channel/UCsLINXnJkeZOQFBwlE9Cp9g"
                target="_blank"
                className="socialLinks">
                <IconYoutube className='youtube' />

              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/iqeamx/"
                target="_blank"
                className="socialLinks"
              >
                <IconLinkedIn className={'facebook'}/>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100064039061566"
                target="_blank"
                className="socialLinks "
              >
                <IconFacebook className={'facebook'}/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/iqeamx/" target="_blank" className="socialLinks">
                <IconInstagram className={'instagram'}/>
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
            <Link
              href={"https://maps.app.goo.gl/M1phzAGV6f8bBM5v8"}
              target="_blank"
            >
              <div className="contactRow">
                <p> Callejón Manuel M. Doria No. 12612</p>
                <p>Col. Libertad 22400. Tijuana, B.C., México.</p>
              </div>
            </Link>
          </div>
          <div className="telefono ">
            <IconPhone className="footerIcon" />
            <div className="contactRow">
              <Link href={"tel:526642101017"}>
                {" "}
                <p>+52 (664) 210-1017</p>
              </Link>
              <Link href={"tel:526646094415"}>
                {" "}
                <p>+52 (664) 609-4415</p>
              </Link>
            </div>
          </div>
          <div className="email ">
            <IconMail className="footerIcon" />
            <Link href={'mailto:info@iqea.mx'}>

            <p>info@iqea.mx</p>
            </Link>
          </div>
        </div>
        <div className="navbar">
          <Link href={"/"} className={isActiveLink("/")}>
            Inicio
          </Link>
          <Link
            href={"/quienes-somos"}
            className={isActiveLink("/quienes-somos")}
          >
            Quienes Somos
          </Link>
          <Link href={"/servicios"} className={isActiveLink("/servicios")}>
            Servicios
          </Link>
          <Link href={"/productos"} className={isActiveLink("/productos")}>
            Productos
          </Link>
          {/* <Link href={"/procesos"} className={isActiveLink("/procesos")}>
            Procesos
          </Link> */}

          <Link href={"/proyectos"} className={isActiveLink("/proyectos")}>
            Proyectos
          </Link>
          <Link href={"/contacto"} className={isActiveLink("/contacto")}>
            Contacto
          </Link>
          <Link
            href={"/sistemas-de-tratamiento"}
            className={isActiveLink("/sistemas-de-tratamiento")}
          >
            Sistemas
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
