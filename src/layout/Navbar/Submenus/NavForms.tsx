"use client";

import React  from "react";
import {
  DropdownGroup,
  DropdownItem,
  DropdownMenu,
  NavItem,
} from "@/components/DropDownMultiLevel/DropDown";
import { usePathname } from "next/navigation";
import { FORM_ROUTER } from "@/services/routers";
import {useTranslation} from 'react-i18next'

export default function NavForms() {
  const {t}=useTranslation()


  const path = usePathname();

  const isActiveLink = (value: string) => {
    return `navLink ${value === path ? "active" : ""}`;
  };
  return (
    <NavItem title={t('common:Cotiza')} href={"/cotiza"} className={isActiveLink("/cotiza")}>
      <DropdownMenu>
        <DropdownGroup nameGroup="main">
          {FORM_ROUTER &&
            FORM_ROUTER.map((element: any) => {
              return (
                <DropdownItem
                  key={(element as any).id}
                  href={`/cotiza/${(element as any).slug}`}
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
