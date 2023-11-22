"use client";

import React, { useEffect, useState } from "react";
import { fetchSTratamientoContent } from "@/services/fetchData";
import {
  DropdownGroup,
  DropdownItem,
  DropdownMenu,
  NavItem,
} from "@/components/DropDownMultiLevel/DropDown";
import { usePathname } from "next/navigation";

export default function NavSistemas() {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    const getProductNav = async () => {
      try {
        const navDataJson = await fetchSTratamientoContent();


        if (navDataJson) {
          const navData = JSON.parse(navDataJson).map((element: any) => {


            const newElement = {
              id: element.id,
              title: element.attributes.titulo,
              slug: element.attributes.slug,

            };


            return newElement;
          });

          setNavData(navData);
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
    <NavItem title="Sistemas" href={"/"} className={isActiveLink("/sistema-de-tratamiento")}>
      <DropdownMenu>
        <DropdownGroup nameGroup="main">
          {navData &&
            navData.map((element: any) => {
              return (
                <DropdownItem
                  key={element.id}
                  href={`/sistema-de-tratamiento/${element.slug}`}
                  goToMenu={element.productos ? element.slug : ""}

                >
                  {element.title}
                </DropdownItem>
              );
            })}
        </DropdownGroup>

      </DropdownMenu>
    </NavItem>
  );
}
