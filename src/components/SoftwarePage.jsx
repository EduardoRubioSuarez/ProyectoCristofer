"use client";
// Recovered from the exported application; handlers and rendered markup are preserved.
import * as ReactJSX from "react/jsx-runtime";
import * as React from "react";
import NextLink from "next/link";
import * as FeatherIcons from "react-icons/fi";
import FooterModule from "./Footer.jsx";
import styles from "../styles/SoftwarePage.classes.js";
function SoftwarePage() {
  let videoRef = React.useRef(null);
  return (
    React.useEffect(() => {
      videoRef.current &&
        ((videoRef.current.currentTime = 5),
        videoRef.current.play().catch((e) => {
          console.log("Video autoplay was prevented by the browser:", e);
        }));
    }, []),
    (
      <ReactJSX.Fragment>
        <section className={styles.serviceHero}>
          <video
            ref={videoRef}
            className={styles.serviceHeroVideo}
            muted={true}
            loop={true}
            playsInline={true}
          >
            <source
              src={
                "https://res.cloudinary.com/dkofkzzc5/video/upload/v1772947770/14519236_3840_2160_60fps_1_-_FPS_-_Videobolt.net_dqtpqx.mp4"
              }
              type={"video/mp4"}
            />
          </video>
          <div className={styles.serviceHeroContent}>
            <div className={styles.serviceIconLarge} data-aos={"fade-down"}>
              <FeatherIcons.FiCode size={28} />
            </div>
            <h1
              className={styles.serviceHeroTitle}
              data-aos={"fade-up"}
              data-aos-delay={"100"}
            >
              {"DESARROLLO DE SOFTWARE + IA"}
            </h1>
            <p
              className={styles.serviceHeroSubtitle}
              data-aos={"fade-up"}
              data-aos-delay={"200"}
            >
              {
                "Desarrollo de soluciones de software moderno y soluciones de automatización con inteligencia artificial para optimizar procesos y mejorar la experiencia del usuario."
              }
            </p>
          </div>
        </section>
        <section className={styles.serviceDetailSection}>
          <div className={styles.serviceContainer}>
            <div className={styles.serviceTextIntro} data-aos={"fade-up"}>
              <h2>{"SOLUCIONES DE SOFTWARE INTELIGENTES"}</h2>
              <p>
                {
                  "Desarrollamos tecnología de última generación, optimizada para conversión y equipada con herramientas avanzadas. Cada proyecto es una combinación de diseño excepcional, funcionalidad robusta y tecnología de punta."
                }
              </p>
            </div>
            <div className={styles.servicesGrid}>
              <div
                className={styles.modernCard}
                data-aos={"fade-up"}
                data-aos-delay={"100"}
              >
                <div className={styles.modernCardIconWrapper}>
                  <FeatherIcons.FiLayout
                    size={28}
                    className={styles.modernCardIcon}
                  />
                </div>
                <h3 className={styles.modernCardTitle}>{"Páginas Web"}</h3>
                <p className={styles.modernCardDesc}>
                  {
                    "Diseño y desarrollo responsivo, desde corporativos hasta landing pages de alta conversión."
                  }
                </p>
              </div>
              <div
                className={styles.modernCard}
                data-aos={"fade-up"}
                data-aos-delay={"200"}
              >
                <div className={styles.modernCardIconWrapper}>
                  <FeatherIcons.FiServer
                    size={28}
                    className={styles.modernCardIcon}
                  />
                </div>
                <h3 className={styles.modernCardTitle}>
                  {"Software Empresarial"}
                </h3>
                <p className={styles.modernCardDesc}>
                  {
                    "Soluciones tecnológicas escalables para digitalizar y optimizar tus operaciones."
                  }
                </p>
              </div>
              <div
                className={styles.modernCard}
                data-aos={"fade-up"}
                data-aos-delay={"300"}
              >
                <div className={styles.modernCardIconWrapper}>
                  <FeatherIcons.FiSmartphone
                    size={28}
                    className={styles.modernCardIcon}
                  />
                </div>
                <h3 className={styles.modernCardTitle}>{"Apps Móviles"}</h3>
                <p className={styles.modernCardDesc}>
                  {
                    "Desarrollo nativo e híbrido para iOS y Android centrado en la mejor experiencia de usuario."
                  }
                </p>
              </div>
              <div
                className={styles.modernCard}
                data-aos={"fade-up"}
                data-aos-delay={"400"}
              >
                <div className={styles.modernCardIconWrapper}>
                  <FeatherIcons.FiCode
                    size={28}
                    className={styles.modernCardIcon}
                  />
                </div>
                <h3 className={styles.modernCardTitle}>{"Apps a Medida"}</h3>
                <p className={styles.modernCardDesc}>
                  {
                    "Sistemas personalizados diseñados específicamente para resolver los retos únicos de tu negocio."
                  }
                </p>
              </div>
              <div
                className={styles.modernCard}
                data-aos={"fade-up"}
                data-aos-delay={"500"}
              >
                <div className={styles.modernCardIconWrapper}>
                  <FeatherIcons.FiMonitor
                    size={28}
                    className={styles.modernCardIcon}
                  />
                </div>
                <h3 className={styles.modernCardTitle}>{"Sistemas POS"}</h3>
                <p className={styles.modernCardDesc}>
                  {
                    "Punto de venta, control de inventario, ventas y facturación para negocios físicos o híbridos."
                  }
                </p>
              </div>
              <div
                className={styles.modernCard}
                data-aos={"fade-up"}
                data-aos-delay={"600"}
              >
                <div className={styles.modernCardIconWrapper}>
                  <FeatherIcons.FiShoppingCart
                    size={28}
                    className={styles.modernCardIcon}
                  />
                </div>
                <h3 className={styles.modernCardTitle}>{"E-Commerce"}</h3>
                <p className={styles.modernCardDesc}>
                  {
                    "Tiendas en línea completas con pasarelas de pago seguro y gestión de inventario automatizada."
                  }
                </p>
              </div>
              <div
                className={styles.modernCard}
                data-aos={"fade-up"}
                data-aos-delay={"700"}
              >
                <div className={styles.modernCardIconWrapper}>
                  <FeatherIcons.FiCpu
                    size={28}
                    className={styles.modernCardIcon}
                  />
                </div>
                <h3 className={styles.modernCardTitle}>
                  {"Automatizaciones IA"}
                </h3>
                <p className={styles.modernCardDesc}>
                  {
                    "Chatbots 24/7, optimización inteligente y análisis de datos predictivos."
                  }
                </p>
              </div>
              <div
                className={styles.modernCard}
                data-aos={"fade-up"}
                data-aos-delay={"800"}
              >
                <div className={styles.modernCardIconWrapper}>
                  <FeatherIcons.FiUsers
                    size={28}
                    className={styles.modernCardIcon}
                  />
                </div>
                <h3 className={styles.modernCardTitle}>{"Sistemas CRM"}</h3>
                <p className={styles.modernCardDesc}>
                  {
                    "Plataformas personalizadas de gestión de clientes para potenciar ventas y fidelizar a tu audiencia."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.serviceCtaSection}>
          <div className={styles.serviceCtaContainer} data-aos={"zoom-in"}>
            <h2 className={styles.serviceCtaTitle}>
              {"¿LISTO PARA LLEVAR TU NEGOCIO AL SIGUIENTE NIVEL?"}
            </h2>
            <p className={styles.serviceCtaText}>
              {
                "Contáctanos para crear tu página web inteligente con automatizaciones que trabajan por ti las 24 horas."
              }
            </p>
            <NextLink href={"/contacto"} className={styles.serviceCtaButton}>
              {"SOLICITAR COTIZACIÓN"}
            </NextLink>
          </div>
        </section>
        <FooterModule />
      </ReactJSX.Fragment>
    )
  );
}
export default SoftwarePage;
