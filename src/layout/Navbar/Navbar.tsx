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
import { fetchProductContent, getContactForm } from "@/services/fetchData";
import { FORM_ROUTER } from "@/services/routers";

import NavProductos from "./Submenus/NavProductos";
import NavSistemas from "./Submenus/NavSistemas";
import NavProcesos from "./Submenus/NavProcesos";
import NavServicios from "./Submenus/NavServicios";
import NavForms from "./Submenus/NavForms";
import { DarkBtn } from "@/components/DarkModeBtn/DarkModeBtn";


export default function Navbar({Products, Systems}:any) {
  const [openMenu, setOpenMenu] = useState(false);

  const path = usePathname();
  useEffect(() => {
    setOpenMenu(false);
  }, [path]);

  const isActiveLink = (value: string) => {
    return `navLink ${value === path ? "active" : ""}`;
  };

  const handlerMenu = () => {
    setOpenMenu(!openMenu);
    // console.log(openMenu);
  };

  return (

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
          <NavProductos navData={Products}/>
          <NavSistemas navData={Systems}/>
          {/* <NavProcesos /> */}
          {/* <NavServicios /> */}

          {/* <li>
            <Link href="/proyectos" className={isActiveLink("/proyectos")}>
              Proyectos
            </Link>
          </li> */}
          <li className="nav-item">
            <Link href="/contacto" className={isActiveLink("/contacto")}>
              Contacto
            </Link>
          </li>
          <NavForms/>
          <li>
            <DarkBtn/>
          </li>

        </ul>
      </nav>

  );
}


