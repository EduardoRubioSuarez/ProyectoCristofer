"use client";
// Recovered from the exported application; handlers and rendered markup are preserved.
import * as ReactJSX from "react/jsx-runtime";
import * as React from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import * as IconUtils from "react-icons";
import * as FeatherIcons from "react-icons/fi";
import styles from "../styles/Navbar.classes.js";
function Icon_r(e) {
  return IconUtils.GenIcon({
    tag: "svg",
    attr: {
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(e);
}
function Icon_c(e) {
  return IconUtils.GenIcon({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 6h16M4 12h16m-7 6h7",
        },
        child: [],
      },
    ],
  })(e);
}
function Navbar() {
  let [menuOpen, setMenuOpen] = React.useState(false),
    [servicesOpen, setServicesOpen] = React.useState(false),
    closeMenus = () => {
      (setMenuOpen(false), setServicesOpen(false));
    };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <NextLink href={"/"} className={styles.logoLink}>
          <NextImage
            src={"/logo1.png"}
            alt={"ISA'S MARKETING DIGITAL"}
            width={110}
            height={110}
            className={styles.navbarLogo}
            priority={true}
          />
        </NextLink>
        <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ""}`}>
          <li>
            <NextLink
              href={"/"}
              className={styles.navLink}
              onClick={closeMenus}
            >
              {"INICIO"}
            </NextLink>
          </li>
          <li
            className={`${styles.navItemDropdown} ${servicesOpen ? styles.dropdownActive : ""}`}
          >
            <a
              href={"/#servicios"}
              className={styles.navLink}
              onClick={(e) => {
                (e.preventDefault(), setServicesOpen(!servicesOpen));
              }}
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              {"SERVICIOS "}
              <FeatherIcons.FiChevronDown className={styles.dropdownIcon} />
            </a>
            <ul className={styles.dropdownMenu}>
              <li>
                <NextLink href={"/paginas-web-ia"} onClick={closeMenus}>
                  {"Desarrollo de Software + Inteligencia Artificial"}
                </NextLink>
              </li>
              <li>
                <NextLink href={"/gestion-redes-sociales"} onClick={closeMenus}>
                  {"Gestión de Redes"}
                </NextLink>
              </li>
              <li>
                <NextLink href={"/consultoria-asesorias"} onClick={closeMenus}>
                  {"Consultoría"}
                </NextLink>
              </li>
              <li>
                <NextLink href={"/talleres-capacitacion"} onClick={closeMenus}>
                  {"Talleres"}
                </NextLink>
              </li>
            </ul>
          </li>
          <li>
            <NextLink
              href={"/paquetes-servicios"}
              className={styles.navLink}
              onClick={closeMenus}
            >
              {"PAQUETES"}
            </NextLink>
          </li>
          <li>
            <NextLink
              href={"/#clientes"}
              className={styles.navLink}
              onClick={closeMenus}
            >
              {"CLIENTES"}
            </NextLink>
          </li>
          <li>
            <NextLink
              href={"/#conocenos"}
              className={styles.navLink}
              onClick={closeMenus}
            >
              {"CONÓCENOS"}
            </NextLink>
          </li>
          <li>
            <NextLink
              href={"/casos-exito"}
              className={styles.navLink}
              onClick={closeMenus}
            >
              {"CASOS DE ÉXITO"}
            </NextLink>
          </li>
          <li className={styles.mobileCtaWrapper}>
            <NextLink
              href={"/contacto"}
              className={styles.mobileCtaButton}
              onClick={closeMenus}
            >
              {"CONTÁCTANOS"}
            </NextLink>
          </li>
        </ul>
        <NextLink
          href={"/contacto"}
          className={styles.ctaButton}
          onClick={closeMenus}
        >
          {"CONTÁCTANOS"}
        </NextLink>
        <button
          className={styles.hamburger}
          onClick={() => {
            (setMenuOpen(!menuOpen), setServicesOpen(false));
          }}
          aria-label={"Menu"}
        >
          {menuOpen ? <Icon_r size={24} /> : <Icon_c size={24} />}
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
