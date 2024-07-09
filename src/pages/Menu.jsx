import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import LogoAndina from "/logoAndina.png";
import LogoAsegacar from "/logoasegacar.png";
import Instragam from "/instagram-1.512x512.png";
import Facebook from "/facebook.512x512.png";
import Tiktok from "/tik-tok.512x511.png";
import Gmail from "/gmail.512x512.png";
import "../style/style.css";
import IconWhat from "../Icons/IconWhatsaap";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

export const Menu = () => {
  useEffect(() => {
    document.cookie = "cookieName=cookieValue; SameSite=None; Secure";
  }, []);

  const [message, setMessage] = useState("");
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/" || location.pathname === "/nosotros") {
      scroll.scrollToTop({ smooth: true, duration: 400 });
    }
  };
  const handleClick2 = () => {
    if (location.pathname === "/nosotros") {
      scroll.scrollToTop({ smooth: true, duration: 400 });
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    const whatsappUrl = `https://wa.me/+573156022009?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const [facebookInViewOnce, setFacebookInViewOnce] = useState(false);
  const [instagramInViewOnce, setInstagramInViewOnce] = useState(false);
  const [tiktokInViewOnce, setTiktokInViewOnce] = useState(false);
  const [gmailInViewOnce, setGmailInViewOnce] = useState(false);

  const [facebookRef, facebookInView] = useInView({ threshold: 0.1 });
  const [instagramRef, instagramInView] = useInView({ threshold: 0.1 });
  const [tiktokRef, tiktokInView] = useInView({ threshold: 0.1 });
  const [gmailRef, gmailInView] = useInView({ threshold: 0.1 });

  if (facebookInView && !facebookInViewOnce) setFacebookInViewOnce(true);
  if (instagramInView && !instagramInViewOnce) setInstagramInViewOnce(true);
  if (tiktokInView && !tiktokInViewOnce) setTiktokInViewOnce(true);
  if (gmailInView && !gmailInViewOnce) setGmailInViewOnce(true);
  const [WhatsAppRef, whatsAppInView] = useInView({ threshold: 0.1 });

  return (
    <>
      <div className="contPricipal">
        <div className="header">
          <div className="contCabecera">
            <div className="box1">
              <div className="logoAsegacar">
                <img className="imgLogo" alt="" src={LogoAsegacar} />
              </div>
              <hr />
              <div className="logoAndina">
                <img className="imgLogo" src={LogoAndina} alt="" />
              </div>
            </div>
            <div className="box2">
              <li className="textoCabecera hoverCabezera">
                {location.pathname !== "/" ? (
                  <Link to="/" onClick={handleClick} className="textC">
                    Inicio
                  </Link>
                ) : (
                  <span
                    onClick={handleClick}
                    className="textC"
                    style={{ cursor: "pointer" }}
                  >
                    Inicio
                  </span>
                )}
              </li>
            </div>
            <div className="box3">
              <li className="textoCabecera hoverCabezera">
                <ScrollLink
                  to="novedadesSecction"
                  smooth={true}
                  duration={400}
                  className="textC"
                >
                  Novedades
                </ScrollLink>
              </li>
            </div>
            <div className="box4">
              <li className="textoCabecera hoverCabezera">
                <ScrollLink
                to="boxServicios"
                smooth={true}
                duration={400}
                className="textC"
                >
                  Servicios
                </ScrollLink>
              </li>
            </div>
            <div className="box5">
              <li className="textoCabecera hoverCabezera">
                {location.pathname !== "/nosotros" ? (
                  <Link to="/nosotros" onClick={handleClick} className="textC">
                    Nosotros
                  </Link>
                ) : (
                  <span
                    onClick={handleClick}
                    className="textC"
                    style={{ cursor: "pointer" }}
                  >
                    Nosotros
                  </span>
                )}
              </li>
            </div>
            <div className="box6">
              <li className="textoCabecera hoverCabezera">
                <ScrollLink
                  to="contact-section"
                  smooth={true}
                  duration={400}
                  className="textC"
                >
                  Contacto
                </ScrollLink>
              </li>
            </div>
          </div>
        </div>

        <section id="slideInicio"></section>
        <div className="contend">
          <Outlet />
        </div>

        <div className="contactenos" id="contact-section">
          <div className="boxContactenos">
            <div className="boxEscribenos d-flex align-items-center mb-3">
              <h3 className="tituloContacto mr-2">Contacta con Nosotros</h3>
              <div
                ref={WhatsAppRef}
                className={classNames("boxWhatsapp", {
                  animate: whatsAppInView,
                })}
              >
                <IconWhat />
              </div>
            </div>
            <div className="input-group mb-3">
  <input
    type="text"
    className="form-control form-control-l form-control-sm-md"
    placeholder="Escribenos via WhatsApp"
    aria-label="Recipient's username"
    aria-describedby="button-addon2"
    value={message}
    onChange={handleInputChange}
  />
  <button
    className="btn btn-color"
    type="button"
    id="button-addon2"
    onClick={sendMessage}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  </button>
</div>

          </div>
          <div className="boxRedes">
            <div className="contTituRedes">
              <h3 className="tituRedes">Síguenos en Nuestras Redes!</h3>
            </div>
            <div className="redesSociales">
              <Link
                className="redes1 red"
                target="_blank"
                to="https://www.facebook.com/andinapba/"
              >
                <div className="contRed">
                  <div
                    ref={facebookRef}
                    className={classNames("contImgRed", {
                      animate: facebookInViewOnce,
                    })}
                  >
                    <div className="boxImgRed">
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={Facebook}
                        alt="Facebook"
                      />
                    </div>
                  </div>
                  <div className="contTxtRed">
                    <span className="texRedes">Facebook</span>
                  </div>
                </div>
              </Link>
              <Link
                className="redes2 red"
                target="_blank"
                to="https://www.instagram.com/andinapba/"
              >
                <div className="contRed">
                  <div
                    ref={instagramRef}
                    className={classNames("contImgRed", {
                      animate: instagramInViewOnce,
                    })}
                  >
                    <div className="boxImgRed">
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={Instragam}
                        alt="Instagram"
                      />
                    </div>
                  </div>
                  <div className="contTxtRed">
                    <span className="texRedes">Instagram</span>
                  </div>
                </div>
              </Link>
              <Link
                className="redes3 red"
                target="_blank"
                to="https://www.tiktok.com/@andinapba_asegacar"
              >
                <div className="contRed">
                  <div
                    ref={tiktokRef}
                    className={classNames("contImgRed", {
                      animate: tiktokInViewOnce,
                    })}
                  >
                    <div className="boxImgRed">
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={Tiktok}
                        alt="Tiktok"
                      />
                    </div>
                  </div>
                  <div className="contTxtRed">
                    <span className="texRedes">Tiktok</span>
                  </div>
                </div>
              </Link>
              <Link
                className="redes4 red"
                target="_blank"
                to="mailto:correo@ejemplo.com?subject=Asunto%20del%20correo&body=Este%20es%20el%20cuerpo%20del%20correo."
              >
                <div className="contRed">
                  <div
                    ref={gmailRef}
                    className={classNames("contImgRed", {
                      animate: gmailInViewOnce,
                    })}
                  >
                    <div className="boxImgRed">
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={Gmail}
                        alt="Correo"
                      />
                    </div>
                  </div>
                  <div className="contTxtRed">
                    <span className="texRedes">Correo</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <footer className="contPie"></footer>
      </div>
    </>
  );
};

export default Menu;
