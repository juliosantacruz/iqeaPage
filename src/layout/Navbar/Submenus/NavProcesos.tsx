"use client";

import React, { useEffect, useState } from "react";
import { fetchProcesosContent } from "@/services/fetchData";
import {
  DropdownGroup,
  DropdownItem,
  DropdownMenu,
  NavItem,
} from "@/components/DropDownMultiLevel/DropDown";
import { usePathname } from "next/navigation";

export default function NavProcesos() {
  const [processTypeNav, setProcessTypeNav] = useState([]);
  console.log(processTypeNav);
  useEffect(() => {
    const getProductNav = async () => {
      try {
        const navDataJson = await fetchProcesosContent();
        console.log(navDataJson);

        if (navDataJson) {
          const navData = JSON.parse(navDataJson).map((element: any) => {
            const arrElement: [] = element.attributes.procesos.data;
            const newProductos = arrElement.map((producto: any) => {
              const newProducto = {
                id: producto.id,
                title: producto.attributes.titulo,
                slug: producto.attributes.slug,
              };
              return newProducto;
            });

            const newElement = {
              id: element.id,
              title: element.attributes.titulo,
              slug: element.attributes.slug,
              procesos: newProductos,
            };
            return newElement;
          });

          setProcessTypeNav(navData);
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
    <NavItem
      title="Procesos"
      href={"/procesos"}
      className={isActiveLink("/procesos")}
    >
      <DropdownMenu>
        <DropdownGroup nameGroup="main">
          {processTypeNav &&
            processTypeNav.map((element: any) => {
              return (
                <DropdownItem
                  key={element.id}
                  href={`/procesos/${element.slug}`}
                  goToMenu={element.procesos ? element.slug : ""}
                  rightIcon={element.procesos.length > 0 ? ">" : null}
                >
                  {element.title}
                </DropdownItem>
              );
            })}
        </DropdownGroup>

        {processTypeNav &&
          processTypeNav.map((element: any) => {
            if (element.procesos) {
              return (
                <DropdownGroup nameGroup={element.slug} key={element.id}>
                  <DropdownItem goToMenu="main" leftIcon={"<"}>
                    Regresar
                  </DropdownItem>

                  {element.procesos &&
                    element.procesos.map((procesos: any) => {
                      return (
                        <DropdownItem
                          key={procesos.id}
                          href={`/procesos/${element.slug}/${procesos.slug}`}
                        >
                          {procesos.title}
                        </DropdownItem>
                      );
                    })}
                </DropdownGroup>
              );
            }
          })}
      </DropdownMenu>
    </NavItem>
  );
}
