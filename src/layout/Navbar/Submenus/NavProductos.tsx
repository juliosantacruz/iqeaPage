"use client";

import React, { useEffect, useState } from "react";
import { fetchProductContent } from "@/services/fetchData";
import {
  DropdownGroup,
  DropdownItem,
  DropdownMenu,
  NavItem,
} from "@/components/DropDownMultiLevel/DropDown";
import { usePathname } from "next/navigation";



export default function NavProductos({navData}:any) {
  // const [productNav, setProductNav] = useState([]);
  // console.log(productNav);
  // useEffect(() => {
  //   const getProductNav = async () => {
  //     try {
  //       const navDataJson = await fetchProductContent();

  //       if (navDataJson) {
  //         const navData = JSON.parse(navDataJson).map((element: any) => {
  //           const arrProductos: [] = element.attributes.productos.data;
  //           const newProductos = arrProductos.map((producto: any) => {
  //             const newProducto = {
  //               id: producto.id,
  //               title: producto.attributes.titulo,
  //               slug: producto.attributes.slug,
  //             };
  //             return newProducto;
  //           });

  //           const newElement = {
  //             id: element.id,
  //             title: element.attributes.title,
  //             slug: element.attributes.slug,
  //             productos: newProductos,
  //           };
  //           return newElement;
  //         });

  //         setProductNav(navData);
  //       } else {
  //         console.error("Data not found in the response.");
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getProductNav();
  // }, []);

  const productNav = navData

  const path = usePathname();

  const isActiveLink = (value: string) => {
    return `navLink ${value === path ? "active" : ""}`;
  };


  return (
    <NavItem title="Productos" href={"/productos"} className={isActiveLink("/productos")}>
            <DropdownMenu>
              <DropdownGroup nameGroup="main">
                {productNav &&
                  productNav.map((element: any) => {
                    return (
                      <DropdownItem
                        key={element.id}
                        href={`/productos/${element.slug}`}
                        goToMenu={element.productos ? element.slug : ""}
                        rightIcon={element.productos.length > 0 ? ">" : null}
                      >
                        {element.title}
                      </DropdownItem>
                    );
                  })}
              </DropdownGroup>

              {productNav &&
                productNav.map((element: any) => {
                  if (element.productos) {
                    return (
                      <DropdownGroup nameGroup={element.slug} key={element.id}>
                        <DropdownItem goToMenu="main" leftIcon={"<"}>
                          Regresar
                        </DropdownItem>

                        {element.productos &&
                          element.productos.map((producto: any) => {
                            return (
                              <DropdownItem
                                key={producto.id}
                                href={`/productos/${element.slug}/${producto.slug}`}
                              >
                                {producto.title}
                              </DropdownItem>
                            );
                          })}
                      </DropdownGroup>
                    );
                  }
                })}
              <DropdownGroup nameGroup="menu3">
                <DropdownItem leftIcon="<" goToMenu="main">
                  back
                </DropdownItem>

                <DropdownItem>profile</DropdownItem>
                <DropdownItem>payments</DropdownItem>
                <DropdownItem>resolution</DropdownItem>
              </DropdownGroup>
            </DropdownMenu>
          </NavItem>
  )
}
