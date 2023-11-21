import React, { useEffect, useRef, useState } from "react";
import "./DropDown.scss";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type NavItemProps = {
  icon?: string;
  title?: string;
  href?: Url;
  children?: any;
};

export function NavItem(props: NavItemProps) {
  const [open, setOpen] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const menuDropdownRef = useRef(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (
        menuDropdownRef.current &&
        !(menuDropdownRef.current as any).contains(event.target)
      ) {
        // console.log(menuDropdownRef);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", (event) => handler(event));
  }, []);

  const handleDropdown = () => {
    setOpen(!open);
  };
  const handleDropdownMouseEnter = () => {
    setOpen(true);
  };
  const handleDropdownMouseLeave = () => {
    setOpen(false);
  };

  return (
    <li
      className="nav-item"
      ref={menuDropdownRef as any}
      onMouseEnter={handleDropdownMouseEnter}

    >
      <Link
        href={props.href || "#"}
        className="icon-button"
        onClick={handleDropdown}
      >
        {/* {props.icon ? props.icon:null}*/} {props.title}
      </Link>

      {open && props.children}
    </li>
  );
}

export const DropdownItem = (props: any) => {
  return (
    <Link
      href={props.href?props.href:''}
      className="menu-item"

    >
      {props.leftIcon && <span className="icon-button" onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>{props.leftIcon}</span>}

      {props.children}
      {props.rightIcon && (
        <span className="icon-button" onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>{props.rightIcon}</span>
      )}
    </Link>
  );
};

export const DropdownGroup = (props: any) => {
    // Función para clonar los elementos hijos y pasarles props adicionales
    const renderChildrenWithProps = () => {
      return React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          // Definir el tipo de props adicionales
          const additionalProps: ChildComponentProps = {
            calcHeight: props.calcHeight,
            activeMenu:props.activeMenu,
            setActiveMenu: props.setActiveMenu,
          };

          // Pasar las props adicionales al elemento clonado
          return React.cloneElement(child, additionalProps);
        }
        return child;
      });
    };
  return (
    <CSSTransition
      in={props.activeMenu === props.nameGroup}
      unmountOnExit
      timeout={500}
      classNames={`menu-${
        props.nameGroup === "main" ? "primary" : "secondary"
      }`}
      onEnter={props.calcHeight}
    >
      <div className="menu">{renderChildrenWithProps()}</div>
    </CSSTransition>
  );
};

export function DropdownMenu(props: any) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState<number>();

  function calcHeight(element: HTMLElement) {
    const height = element.offsetHeight + 32;
    setMenuHeight(height);
  }

  // Función para clonar los elementos hijos y pasarles props adicionales
  const renderChildrenWithProps = () => {
    return React.Children.map(props.children, (child) => {
      if (React.isValidElement(child)) {
        // Definir el tipo de props adicionales
        const additionalProps: ChildComponentProps = {
          calcHeight: calcHeight,
          activeMenu:activeMenu,
          setActiveMenu: setActiveMenu,
        };

        // Pasar las props adicionales al elemento clonado
        return React.cloneElement(child, additionalProps);
      }
      return child;
    });
  };
  return (
    <>

      <div className="arrow"></div>
    <div className="dropdown" style={{ height: menuHeight }}>
      {renderChildrenWithProps()}
    </div>
    </>
  );
}

interface ChildComponentProps {
  calcHeight: any;
  activeMenu:string
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
}
