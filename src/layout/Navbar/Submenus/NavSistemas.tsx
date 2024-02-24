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
import {useTranslation} from 'react-i18next'

export default function NavSistemas({navData}:any) {
  const {t}=useTranslation()

  const navSystems = navData
  const path = usePathname();



  const isActiveLink = (value: string) => {
    return `navLink ${value === path ? "active" : ""}`;
  };
  return (
    <NavItem
      title={t('common:Systems')}
      href={"/sistemas-de-tratamiento"}
      className={isActiveLink("/sistemas-de-tratamiento")}
    >
      <DropdownMenu>
        <DropdownGroup nameGroup="main">
          {navSystems &&
            navSystems.map((element: any) => {
              return (
                <DropdownItem
                  key={element.id}
                  href={`/sistemas-de-tratamiento/${element.slug}`}
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
