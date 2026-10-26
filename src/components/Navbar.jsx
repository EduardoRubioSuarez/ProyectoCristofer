"use client";
// Recovered from the exported application; handlers and rendered markup are preserved.
import * as ReactJSX from "react/jsx-runtime";
import * as React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
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
// Color de la sección (páginas de servicio) para el logo.
const SECTION_LOGO = {
  "/gestion-redes-sociales": "#FEFB0B",
  "/talleres-capacitacion": "#FF1515",
  "/paginas-web-ia": "#4D4DE6",
  "/consultoria-asesorias": "#000000",
};
const LOGO_LIGHT = "#000000";
const LOGO_DARK = "#FEFB0B";
const parseRgb = (str) => {
  let m = str.match(/rgba?\(([^)]*)\)/);
  if (!m) return null;
  let [r, g, b, a = 1] = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
  return { r, g, b, a };
};
const hexToRgb = (hex) => ({
  r: parseInt(hex.slice(1, 3), 16),
  g: parseInt(hex.slice(3, 5), 16),
  b: parseInt(hex.slice(5, 7), 16),
});
const luminance = ({ r, g, b }) => {
  let f = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const contrast = (a, b) => {
  let l1 = luminance(a),
    l2 = luminance(b);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};
// Color de fondo real detrás de un punto: primer elemento con fondo opaco (color o degradado).
const backgroundAt = (x, y, skip) => {
  for (let el of document.elementsFromPoint(x, y)) {
    if (skip && skip.contains(el)) continue;
    let cs = getComputedStyle(el),
      c = parseRgb(cs.backgroundColor);
    if (c && c.a >= 0.5) return c;
    let stops = (cs.backgroundImage.match(/rgba?\([^)]*\)/g) || [])
      .map(parseRgb)
      .filter((v) => v && v.a >= 0.5);
    if (stops.length)
      return {
        r: stops.reduce((t, v) => t + v.r, 0) / stops.length,
        g: stops.reduce((t, v) => t + v.g, 0) / stops.length,
        b: stops.reduce((t, v) => t + v.b, 0) / stops.length,
      };
  }
  return { r: 255, g: 255, b: 255 };
};
function Navbar() {
  let [menuOpen, setMenuOpen] = React.useState(false),
    [servicesOpen, setServicesOpen] = React.useState(false),
    closeMenus = () => {
      (setMenuOpen(false), setServicesOpen(false));
    };
  let [logoHidden, setLogoHidden] = React.useState(false);
  let pathname = usePathname();
  let [logoColor, setLogoColor] = React.useState(LOGO_LIGHT);
  let navRef = React.useRef(null);
  let logoRef = React.useRef(null);
  React.useEffect(() => {
    let section = SECTION_LOGO[pathname.replace(/\/$/, "")],
      update = () => {
        let box = logoRef.current && logoRef.current.getBoundingClientRect();
        if (!box) return;
        let bg = backgroundAt(
          box.left + box.width / 2,
          box.top + box.height / 2,
          navRef.current,
        );
        let auto = luminance(bg) < 0.4 ? LOGO_DARK : LOGO_LIGHT;
        // En Talleres y Desarrollo web el amarillo se sustituye por negro, si el negro se lee sobre ese fondo.
        if (
          auto === LOGO_DARK &&
          (section === "#FF1515" || section === "#4D4DE6") &&
          contrast(hexToRgb(LOGO_LIGHT), bg) >= 3
        )
          auto = LOGO_LIGHT;
        // El color de la sección solo se usa si se lee bien sobre el fondo.
        setLogoColor(
          section && contrast(hexToRgb(section), bg) >= 3 ? section : auto,
        );
      };
    update();
    let timer = setInterval(update, 400);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);
  React.useEffect(() => {
    let onContact = pathname === "/contacto" || pathname === "/contacto/";
    let lastY = window.scrollY,
      ticking = false,
      update = () => {
        let y = window.scrollY;
        if (onContact) {
          setLogoHidden(y > 40);
          ticking = false;
          return;
        }
        let navH = 100,
          clients = document.querySelector("[data-clients-carousel]"),
          top = clients
            ? clients.getBoundingClientRect().top + y
            : window.innerHeight * 0.8,
          bottom = clients ? top + clients.offsetHeight : top;
        if (y + navH <= top) setLogoHidden(false);
        else if (y < bottom) setLogoHidden(true);
        else if (y > lastY + 4) setLogoHidden(true);
        else if (y < lastY - 4) setLogoHidden(false);
        lastY = y;
        ticking = false;
      },
      onScroll = () => {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(update);
        }
      };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
  React.useEffect(() => {
    if (!servicesOpen) return;
    let onKey = (e) => e.key === "Escape" && setServicesOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [servicesOpen]);
  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.navContainer}>
        <NextLink
          href={"/"}
          className={`${styles.logoLink} navbar-logo-link ${logoHidden ? "is-hidden" : ""}`}
          tabIndex={logoHidden ? -1 : 0}
          aria-hidden={logoHidden}
        >
          <span
            ref={logoRef}
            role="img"
            aria-label={"ISA'S MARKETING DIGITAL"}
            className={`${styles.navbarLogo} navbar-logo-mask`}
            style={{ "--logo-color": logoColor }}
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
                <NextLink href={"/paginas-web-ia"} onClick={closeMenus} style={{ "--row-color": "#4D4DE6", "--row-rest": "#93FFFB" }}>
                  {"Desarrollo de Software"}
                </NextLink>
              </li>
              <li>
                <NextLink href={"/gestion-redes-sociales"} onClick={closeMenus} style={{ "--row-color": "#FEFB0B", "--row-rest": "#FFF9B8" }}>
                  {"Gestión de Redes"}
                </NextLink>
              </li>
              <li>
                <NextLink href={"/consultoria-asesorias"} onClick={closeMenus} style={{ "--row-color": "#000000", "--row-ink": "#ffffff", "--row-rest": "#D4D7DD" }}>
                  {"Consultoría"}
                </NextLink>
              </li>
              <li>
                <NextLink href={"/talleres-capacitacion"} onClick={closeMenus} style={{ "--row-color": "#FF1515", "--row-rest": "#FF9393" }}>
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
              href={"/casos-exito"}
              className={styles.navLink}
              onClick={closeMenus}
            >
              {"PORTAFOLIO"}
            </NextLink>
          </li>
          <li>
            <NextLink
              href={"/conocenos"}
              className={styles.navLink}
              onClick={closeMenus}
            >
              {"CONÓCENOS"}
            </NextLink>
          </li>
          <li className={styles.mobileCtaWrapper}>
            <NextLink
              href={"/contacto"}
              className={`${styles.ctaButton} ${styles.mobileCtaButton}`}
              onClick={closeMenus}
            >
              {"CONT\u00c1CTANOS"}
            </NextLink>
          </li>
        </ul>
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
