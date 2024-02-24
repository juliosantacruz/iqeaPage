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
import {useTranslation} from 'react-i18next'



export default function NavProductos({navData}:any) {
  const {t}=useTranslation()


  const productNav = navData

  const path = usePathname();

  const isActiveLink = (value: string) => {
    return `navLink ${value === path ? "active" : ""}`;
  };


  return (
    <NavItem title={t('common:Products')} href={"/productos"} className={isActiveLink("/productos")}>
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
