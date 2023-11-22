"use client";

import React, { useEffect, useState } from "react";
import { fetchServiciosContent } from "@/services/fetchData";
import {
  DropdownGroup,
  DropdownItem,
  DropdownMenu,
  NavItem,
} from "@/components/DropDownMultiLevel/DropDown";
import { usePathname } from "next/navigation";

export default function NavServicios() {
  const [productNav, setProductNav] = useState([]);
  // console.log(productNav);
  useEffect(() => {
    const getProductNav = async () => {
      try {
        const navDataJson = await fetchServiciosContent();

        if (navDataJson) {
          const navData = JSON.parse(navDataJson).map((element: any) => {


            const newElement = {
              id: element.id,
              title: element.attributes.titulo,
              slug: element.attributes.slug,
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

  const path = usePathname();

  const isActiveLink = (value: string) => {
    return `navLink ${value === path ? "active" : ""}`;
  };

  return (
    <NavItem title="Servicios" href={"/servicios"} className={isActiveLink("/servicios")}>
    <DropdownMenu>
      <DropdownGroup nameGroup="main">
        {productNav &&
          productNav.map((element: any) => {
            return (
              <DropdownItem
                key={element.id}
                href={`/servicios/${element.slug}`}
                goToMenu={element.productos ? element.slug : ""}

              >
                {element.title}
              </DropdownItem>
            );
          })}
      </DropdownGroup>

    </DropdownMenu>
  </NavItem>
  )
}
