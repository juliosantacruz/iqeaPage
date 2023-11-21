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
import {
  DropdownGroup,
  DropdownItem,
  DropdownMenu,
  NavItem,
} from "@/components/DropDownMultiLevel/DropDown";
// import navDataJson from "./test.json";

// const API_URL_STRAPI_DEV  = process.env.API_URL_STRAPI_DEV
// const API_URL_STRAPI_PROD = process.env.API_URL_STRAPI_PROD
// const IS_DEV = process.env.IS_DEV
// const isDev = IS_DEV
// const API_URL_STRAPI = isDev? API_URL_STRAPI_DEV:API_URL_STRAPI_PROD

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  // const [contactForm, setContactForm] = useState([]);
  const [productNav, setProductNav] = useState([]);

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

          {/* <Link href="/productos" className={isActiveLink("/productos")}>
              Productos
            </Link> */}

          <NavItem title="Productos" href={'/productos'}>
            <DropdownMenu>
              <DropdownGroup nameGroup="main">
              {productNav &&
                productNav.map((element: any) => {
                    return (
                    <>
                      <DropdownItem key={element.id} href={`/productos/${element.slug}`}>
                        {element.title}
                      </DropdownItem>

                      {/* {element.productos &&
                        element.productos.map((subElement: any) => {
                          return (
                            <DropdownGroup nameGroup="main">
                              <DropdownItem key={subElement.id}>
                                {element.title}
                              </DropdownItem>
                            </DropdownGroup>
                          );
                        })} */}
                    </>
                    );
                  })}
                  </DropdownGroup>;

              <DropdownGroup nameGroup="settings">
                <DropdownItem leftIcon="<" goToMenu="main">
                  back
                </DropdownItem>

                <DropdownItem>profile</DropdownItem>
                <DropdownItem>payments</DropdownItem>
                <DropdownItem>resolution</DropdownItem>
              </DropdownGroup>

              <DropdownGroup nameGroup="menu3">
                <DropdownItem leftIcon="<" goToMenu="main">
                  back
                </DropdownItem>

                <DropdownItem>option 1</DropdownItem>
                <DropdownItem>option 2</DropdownItem>
                <DropdownItem>option 3</DropdownItem>
                <DropdownItem>option 4</DropdownItem>
                <DropdownItem>option 5</DropdownItem>
                <DropdownItem>option 6</DropdownItem>
                <DropdownItem>option 7</DropdownItem>
                <DropdownItem>option 8</DropdownItem>
                <DropdownItem>option 9</DropdownItem>
                <DropdownItem>option 0</DropdownItem>
              </DropdownGroup>
            </DropdownMenu>
          </NavItem>

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
                        title={(element as any).title}
                        href={`/formulario/${(element as any).slug}`}
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
