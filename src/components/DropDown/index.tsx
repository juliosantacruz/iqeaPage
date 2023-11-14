import React, { ReactNode, useEffect, useRef, useState } from "react";
import "./DropDown.scss";
import user from "../../assets/icons/chevron-right.svg";
import Link from "next/link";
import { ReactLoadableManifest } from "next/dist/server/load-components";

export default function DropDown({children, title, positionX}:any) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (event: any) => {
      if (menuRef.current&&!(menuRef.current as any).contains(event.target)) {
        // console.log(menuRef);
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", (event) => handler(event));
  }, []);

  //console.log(menuRef);
  const positionRight={right:`${positionX}px`}


  return (
    <div className="menuContainer " ref={menuRef as any}>
      <div className="menuTrigger" onClick={() => setOpen(!open)} >
        <div className="userIcon">{title}</div>
      </div>

      <div className={`dropdown-menu ${open ? "active" : "inactive"}`} style={positionRight} >
      

        <ul>
          {children}
          

      
        </ul>
      </div>
    </div>
  );
}


type DropDownItemType={title?:string, href:string}
export function DropDownItem({title,href }:DropDownItemType) {
  return (
    <li className="dropdownItem">
      {/* <img src={user} alt="icon" /> */}
      <Link href={href}>{title}</Link>
    </li>
  );
}