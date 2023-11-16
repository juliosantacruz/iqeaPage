"use client";

import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoIqea from "@/assets/iqea_logo.png";
import IconMenu from "@/components/Icons/IconMenu";
import DropDown, { DropDownItem } from "@/components/DropDown";
// import { API_URL_STRAPI } from "@/config";
import { getContactForm } from "@/services/fetchData";

// const API_URL_STRAPI_DEV  = process.env.API_URL_STRAPI_DEV
// const API_URL_STRAPI_PROD = process.env.API_URL_STRAPI_PROD
// const IS_DEV = process.env.IS_DEV
// const isDev = IS_DEV
// const API_URL_STRAPI = isDev? API_URL_STRAPI_DEV:API_URL_STRAPI_PROD






export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [contactForm, setContactForm] = useState([]);

  const path = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const forms = await getContactForm(process.env.API_URL_STRAPI as string);
        setContactForm(forms);
        setOpenMenu(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [path]);

  const isActiveLink = (value: string) => {
    return `navLink ${value === path ? "active" : ""}`;
  };

  const handlerMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  return (
    <header>
      <nav className="navbar">
        <Link href="/">
          <div className="iqeaLogo">
            <Image src={logoIqea} alt="logo" className="logoIqea" />
          </div>
        </Link>
        <div className="movilMenu">
          <button onClick={handlerMenu} className="buttonMenu">
            <IconMenu className="hamburger" />
          </button>
        </div>
        <ul className={`navLinks ${openMenu ? "openMenu" : ""}`}>
          <li>
            <Link href="/" className={isActiveLink("/")}>
              Inicio
            </Link>
          </li>
          {/* <li>
            <Link
              href="/quienes-somos"
              className={isActiveLink("/quienes-somos")}
            >
              Quiénes Somos
            </Link>
          </li> */}
          <li>
            <Link href="/procesos" className={isActiveLink("/procesos")}>
              Procesos
            </Link>
          </li>
          <li>
            <Link href="/servicios" className={isActiveLink("/servicios")}>
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/proyectos" className={isActiveLink("/productos")}>
              Productos
            </Link>
          </li>
          <li>
            <Link href="/proyectos" className={isActiveLink("/proyectos")}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/contacto" className={isActiveLink("/contacto")}>
              Contacto
            </Link>
          </li>
          <li>
            <DropDown title={"Formularios"} positionX={200}>
              {contactForm !== undefined
                ? contactForm.map((element) => {
                    return (
                      <DropDownItem
                        key={(element as any).id}
                        title={(element as any).attributes.titulo}
                        href={`/formulario/${(element as any).attributes.slug}`}
                      />
                    );
                  })
                : null}
              {/* <DropDownItem
                title={"Biological Treatment Background"}
                href={"/formulario/biological-treatment-background"}
              />
              <DropDownItem
                title={"Reverse Osmosis Design Request"}
                href={"/formulario/reverse-osmosis-design-request"}
              /> */}
            </DropDown>
          </li>
        </ul>
      </nav>
    </header>
  );
}
