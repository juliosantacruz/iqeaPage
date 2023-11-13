import React, { useEffect, useRef, useState } from "react";
import "./DropDown.scss";
import user from "../../assets/icons/chevron-right.svg";
import Link from "next/link";

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (event: any) => {
      if (!(menuRef.current as any).contains(event.target)) {
        // console.log(menuRef);
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", (event) => handler(event));
  }, []);

  //console.log(menuRef);
  return (
    <div className="menuContainer " ref={menuRef as any}>
      <div className="menuTrigger" onClick={() => setOpen(!open)}>
        <div className="userIcon">Formularios</div>
      </div>

      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <div className="dropdownIcon">
          <img src={user} alt="" />
        </div>

        <ul>
          <DropDownItem title={'Biological Treatment Background'} href={'/formulario/biological-treatment-background'}/>
          <DropDownItem title={'Reverse Osmosis Design Request'} href={'/formulario/reverse-osmosis-design-request'}/>
          <DropDownItem title={'test 1 '} href={'/'}/>
          <DropDownItem title={'test 1 '} href={'/'}/>

      
        </ul>
      </div>
    </div>
  );
}

type DropDownItemType={title?:string, href:string}
function DropDownItem({title,href }:DropDownItemType) {
  return (
    <li className="dropdownItem">
      {/* <img src={user} alt="icon" /> */}
      <Link href={href}>{title}</Link>
    </li>
  );
}
