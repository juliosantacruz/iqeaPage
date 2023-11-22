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


export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  // const [contactForm, setContactForm] = useState([]);
  const [productNav, setProductNav] = useState([]);
  // console.log(productNav);
  useEffect(() => {
    const getProductNav = async () => {
      try {
        const navDataJson = await fetchProductContent();

        if (navDataJson) {
          const navData = JSON.parse(navDataJson).map((element: any) => {
            const arrProductos: [] = element.attributes.productos.data;
            const newProductos = arrProductos.map((producto: any) => {
              const newProducto = {
                id: producto.id,
                title: producto.attributes.titulo,
                slug: producto.attributes.slug,
              };
              return newProducto;
            });

            const newElement = {
              id: element.id,
              title: element.attributes.title,
              slug: element.attributes.slug,
              productos: newProductos,
            };
            return newElement;
          });

          setProductNav(navData);
        } else {
          console.error("Data not found in the response.");
        }
      } catch (err) {
        console.error(err);
      }
    };
    getProductNav();
  }, []);

  const contactForm = FORM_ROUTER;
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
          <NavProductos />
          <NavSistemas />
          <NavProcesos />
          <NavServicios/>

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
          <NavForms/>

        </ul>
      </nav>
    </header>
  );
}
