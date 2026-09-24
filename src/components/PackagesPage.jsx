"use client";
// Recovered from the exported application; handlers and rendered markup are preserved.
import * as ReactJSX from "react/jsx-runtime";
import * as React from "react";
import NextLink from "next/link";
import * as FeatherIcons from "react-icons/fi";
import * as IconUtils from "react-icons";
import FooterModule from "./Footer.jsx";
import styles from "../styles/PackagesPage.classes.js";
function Icon_l(e) {
  return IconUtils.GenIcon({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z",
        },
        child: [],
      },
    ],
  })(e);
}
function PackagesPage() {
  let videoRef = React.useRef(null);
  React.useEffect(() => {
    videoRef.current &&
      videoRef.current.play().catch((e) => {
        console.log("Video autoplay was prevented by the browser:", e);
      });
  }, []);
  let webPackages = [
      {
        title: "Landing + Bot IA",
        price: "$6,500",
        subtitle: "Implementación inicial",
        icon: <FeatherIcons.FiZap size={28} />,
        features: [
          "Creación de Página Web Básica",
          "Desarrollo y Setup de Bot IA",
          "Mantenimiento Bot: $1,600/mes",
          "Dominio gratis (1er año)",
          "Hosting e infraestructura",
          "Correos profesionales",
        ],
        highlight: false,
        delay: "100",
      },
      {
        title: "Página Web Completa",
        price: "$8,500",
        subtitle: "Un solo pago",
        icon: <FeatherIcons.FiStar size={28} />,
        features: [
          "Diseño adaptado a necesidades",
          "Sistema de agendado de citas",
          "Formulario de contacto dinámico",
          "Galería de imágenes profesional",
          "Sección de servicios detallada",
          "Dominio y Hosting incluidos",
          "Correos profesionales",
        ],
        highlight: true,
        delay: "200",
      },
      {
        title: "Bot de IA",
        price: "$1,800/mes",
        subtitle: "Solo suscripción",
        icon: <FeatherIcons.FiZap size={28} />,
        features: [
          "Atención 24/7 sin interrupciones",
          "Integración con WhatsApp Business",
          "Entrenamiento personalizado",
          "Calificación automática de leads",
          "Transferencia a humanos",
          "Soporte técnico continuo",
          "Optimización mensual",
        ],
        highlight: false,
        delay: "300",
      },
    ],
    businessPackages = [
      {
        title: "Digitaliza y Automatiza",
        price: "$80,000+",
        subtitle: "Inversión mínima",
        icon: <FeatherIcons.FiZap size={28} />,
        features: [
          "Digitaliza 1 - 6+ Sucursales",
          "Punto de Venta e Inventario",
          "CRM y Gestión de Franquicias",
          "Página Web + Chatbot IA",
          "Control desde una plataforma",
          "Embudos de Venta Automatizados",
          "Ideal para negocios en expansión",
        ],
        highlight: true,
        delay: "100",
      },
      {
        title: "Ventas Empresarial",
        price: "$97,000",
        subtitle: "+ $19,400/mes (Seguimiento)",
        icon: <FeatherIcons.FiAward size={28} />,
        features: [
          "Sistema de Ventas Empresarial",
          "Automatización WhatsApp CRM",
          "Publicidad en FB, IG y TikTok",
          "Seguimiento Automático de Leads",
          "Dashboard de Resultados en vivo",
          "Máxima Conversión y Control",
          "Acompañamiento Estratégico",
        ],
        highlight: false,
        delay: "200",
      },
    ],
    n = [
      {
        title: "Paquete Oro",
        price: "$4,300",
        subtitle: "Manejo Mensual",
        icon: <FeatherIcons.FiStar size={28} />,
        features: [
          "3 Anuncios Publicitarios Efectivos",
          "Asesoría de Marketing",
          "4 Ediciones Especiales",
          "Branding para Contenido Redes",
          "Presentación de Resultados",
          "Vinculación con WhatsApp Business",
        ],
        highlight: false,
        variant: "gold",
        platforms: ["facebook", "instagram"],
        delay: "200",
      },
      {
        title: "Paquete Diamante",
        price: "$6,300",
        subtitle: "Manejo Mensual",
        icon: <FeatherIcons.FiAward size={28} />,
        features: [
          "10 Publicaciones Orgánicas",
          "4 Anuncios Publicitarios Efectivos",
          "Vinculación con WhatsApp Business",
          "Asesorías de Marketing",
          "Edición Especial",
          "Branding para Contenido Redes",
          "Presentación de Resultados",
        ],
        highlight: true,
        variant: "diamond",
        platforms: ["facebook", "instagram", "tiktok"],
        delay: "300",
      },
    ];
  return (
    <ReactJSX.Fragment>
      <section className={styles.serviceHero}>
        <video
          ref={videoRef}
          className={styles.serviceHeroVideo}
          muted={true}
          loop={true}
          playsInline={true}
          autoPlay={true}
        >
          <source
            src={
              "https://res.cloudinary.com/dkofkzzc5/video/upload/v1773788560/7552421-hd_1920_1080_25fps_cnwyv9.mp4"
            }
            type={"video/mp4"}
          />
        </video>
        <div className={styles.serviceHeroContent}>
          <div className={styles.serviceIconLarge} data-aos={"fade-down"}>
            <FeatherIcons.FiPackage size={28} />
          </div>
          <h1
            className={styles.serviceHeroTitle}
            data-aos={"fade-up"}
            data-aos-delay={"100"}
          >
            {"PAQUETES DE SERVICIOS"}
          </h1>
          <p
            className={styles.serviceHeroSubtitle}
            data-aos={"fade-up"}
            data-aos-delay={"200"}
          >
            {
              "Soluciones diseñadas para escalar tu presencia digital. Elige el plan que mejor se adapte a tus necesidades y objetivos de negocio."
            }
          </p>
        </div>
      </section>
      <section className={styles.serviceDetailSection}>
        <div className={styles.serviceContainer}>
          <div className={styles.categoryHeader} data-aos={"fade-up"}>
            <h2 className={styles.categoryTitle}>
              {"PÁGINAS WEB Y SOLUCIONES IA"}
            </h2>
            <div className={styles.titleUnderline} />
          </div>
          <div className={styles.packagesGrid}>
            {webPackages.map((e, i) => (
              <div
                className={`${styles.pricingCard} ${e.highlight ? styles.highlightCard : ""}`}
                data-aos={"fade-up"}
                data-aos-delay={e.delay}
                key={i}
              >
                {e.highlight && (
                  <div className={styles.popularBadge}>{"MÁS POPULAR"}</div>
                )}
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconWrapper}>{e.icon}</div>
                  <h3 className={styles.cardTitle}>{e.title}</h3>
                  <div className={styles.priceTag}>{e.price}</div>
                  {e.subtitle && (
                    <p className={styles.monthlyFee}>{e.subtitle}</p>
                  )}
                </div>
                <ul className={styles.featureList}>
                  {e.features.map((e, i) => (
                    <li className={styles.featureItem} key={i}>
                      <FeatherIcons.FiCheck className={styles.checkIcon} /> {e}
                    </li>
                  ))}
                </ul>
                <NextLink href={"/contacto"} className={styles.cardButton}>
                  {"SOLICITAR INFORMACIÓN"}
                </NextLink>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className={`${styles.serviceDetailSection} ${styles.blueBgSection}`}
      >
        <div className={styles.serviceContainer}>
          <div className={styles.categoryHeader} data-aos={"fade-up"}>
            <h2 className={styles.categoryTitle}>{"SISTEMAS EMPRESARIALES"}</h2>
            <div className={styles.titleUnderline} />
          </div>
          <div className={styles.packagesGrid}>
            {businessPackages.map((e, i) => (
              <div
                className={`${styles.pricingCard} ${e.highlight ? styles.highlightCard : ""}`}
                data-aos={"fade-up"}
                data-aos-delay={e.delay}
                key={i}
              >
                {e.highlight && (
                  <div className={styles.popularBadge}>{"MÁS POPULAR"}</div>
                )}
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconWrapper}>{e.icon}</div>
                  <h3 className={styles.cardTitle}>{e.title}</h3>
                  <div className={styles.priceTag}>{e.price}</div>
                  {e.subtitle && (
                    <p className={styles.monthlyFee}>{e.subtitle}</p>
                  )}
                </div>
                <ul className={styles.featureList}>
                  {e.features.map((e, i) => (
                    <li className={styles.featureItem} key={i}>
                      <FeatherIcons.FiCheck className={styles.checkIcon} /> {e}
                    </li>
                  ))}
                </ul>
                <NextLink href={"/contacto"} className={styles.cardButton}>
                  {"SOLICITAR INFORMACIÓN"}
                </NextLink>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.serviceDetailSection}>
        <div className={styles.serviceContainer}>
          <div className={styles.categoryHeader} data-aos={"fade-up"}>
            <h2 className={styles.categoryTitle}>
              {"MANEJO DE REDES SOCIALES"}
            </h2>
            <div className={styles.titleUnderline} />
          </div>
          <div className={styles.packagesGrid}>
            {n.map((e, i) => (
              <div
                className={`${styles.pricingCard} ${e.highlight ? styles.highlightCard : ""} ${"diamond" === e.variant ? styles.diamondCard : ""} ${"gold" === e.variant ? styles.goldCard : ""}`}
                data-aos={"fade-up"}
                data-aos-delay={e.delay}
                key={i}
              >
                {e.highlight && (
                  <div
                    className={
                      "diamond" === e.variant
                        ? styles.diamondBadge
                        : "gold" === e.variant
                          ? styles.goldBadge
                          : styles.popularBadge
                    }
                  >
                    {"PREMIUM"}
                  </div>
                )}
                <div className={styles.cardHeader}>
                  <div
                    className={`${styles.cardIconWrapper} ${"diamond" === e.variant ? styles.diamondIcon : "gold" === e.variant ? styles.goldIcon : ""}`}
                  >
                    {e.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{e.title}</h3>
                  {e.platforms && (
                    <div className={styles.platformIcons}>
                      {Array.isArray(e.platforms) &&
                        e.platforms.includes("facebook") && (
                          <FeatherIcons.FiFacebook />
                        )}
                      {Array.isArray(e.platforms) &&
                        e.platforms.includes("instagram") && (
                          <FeatherIcons.FiInstagram />
                        )}
                      {Array.isArray(e.platforms) &&
                        e.platforms.includes("tiktok") && <Icon_l />}
                    </div>
                  )}
                  <div className={styles.priceTag}>{e.price}</div>
                  {e.subtitle && (
                    <p className={styles.monthlyFee}>{e.subtitle}</p>
                  )}
                </div>
                <ul className={styles.featureList}>
                  {e.features.map((i, s) => (
                    <li className={styles.featureItem} key={s}>
                      <FeatherIcons.FiCheck
                        className={`${styles.checkIcon} ${"diamond" === e.variant ? styles.diamondCheck : "gold" === e.variant ? styles.goldCheck : ""}`}
                      />{" "}
                      {i}
                    </li>
                  ))}
                </ul>
                <NextLink href={"/contacto"} className={styles.cardButton}>
                  {"SOLICITAR INFORMACIÓN"}
                </NextLink>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.serviceCtaSection}>
        <div className={styles.serviceCtaContainer} data-aos={"zoom-in"}>
          <h2 className={styles.serviceCtaTitle}>
            {"¿NECESITAS UN PLAN A MEDIDA?"}
          </h2>
          <p className={styles.serviceCtaText}>
            {
              "Si ninguno de nuestros paquetes estándar se ajusta a lo que buscas, podemos crear una propuesta personalizada para tu empresa."
            }
          </p>
          <NextLink href={"/contacto"} className={styles.serviceCtaButton}>
            {"CONTÁCTANOS AHORA"}
          </NextLink>
        </div>
      </section>
      <FooterModule />
    </ReactJSX.Fragment>
  );
}
export default PackagesPage;
