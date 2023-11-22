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
import { FORM_ROUTER } from "@/services/routers";

export default function NavForms() {


  const path = usePathname();

  const isActiveLink = (value: string) => {
    return `navLink ${value === path ? "active" : ""}`;
  };
  return (
    <NavItem title="Cotiza!" href={"#"} className={isActiveLink("/formulario")}>
      <DropdownMenu>
        <DropdownGroup nameGroup="main">
          {FORM_ROUTER &&
            FORM_ROUTER.map((element: any) => {
              return (
                <DropdownItem
                  key={(element as any).id}
                  href={`/formulario/${(element as any).slug}`}
                  goToMenu={element.productos ? element.slug : ""}

                >
                  {(element as any).title}
                </DropdownItem>
              );
            })}
        </DropdownGroup>
      </DropdownMenu>
    </NavItem>
  );
}
