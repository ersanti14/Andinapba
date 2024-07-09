import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Img1 from "/1.jpg";
import DecBottom from "../components/DecBottom";
import DecTop from "../components/DecTop";
import SlideVisInc from "../components/SlideVistInc";
import VideoPlayer from "../components/VideoPlayer";
import SliderAuto from "../components/StickReact";
import NuestraProyeccion from "../components/NuestraProyeccion";
import IconMaps from "../Icons/IconMaps";
import Servicios from "../components/ServiciosComp";
import "../style/styleMedia.css";
import "../style/style.css";

import { useInView } from "react-intersection-observer";
import classNames from "classnames";

export const VistaInicial = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1 });

  useEffect(() => {
    document.cookie = "cookieName=cookieValue; SameSite=Strict; Secure";
  }, []);

  const videoSrc = "/DJI_0637.MP4";
  const posterSrc = Img1;

  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/" || location.pathname === "/nosotros") {
      scroll.scrollToTop({ smooth: true, duration: 400 });
    }
  };

  return (
    <>
      <div className="sliderContend">
        <div className="decHeader" style={{ overflow: "hidden" }}>
          <DecTop />
        </div>
        <div className="sliderTxt">
          <div className="contxtInicial">
            <h2 className="textInicioP">Planta de Beneficio Animal</h2>
            <p className="textContInicio">
              Garantizamos procedimientos operativos estandarizados de los
              productos cárnicos procesados, generando el fortalecimiento del
              consumo de carne legal, dando satisfacción a sus clientes,
              asegurando la calidad sanitaria.
            </p>
            <Link to="/nosotros" onClick={handleClick} className="BtnInicio">
              Conocer más
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
            </Link>
          </div>
        </div>
        <div className="contSlider">
          <SlideVisInc />
        </div>
        <div
          id="novedadesSecction"
          className="decBottom"
          style={{ overflow: "hidden" }}
        >
          <DecBottom />
        </div>
      </div>

      <div className="divNuevaPlanta">
        <div className="DecNovedades2" style={{ overflow: "hidden" }}>
          <DecTop />
        </div>
        <div className="contNuevaPlanta">
          <h3 className="tituNuevaPlanta">Conozca Nuestra Nueva Planta</h3>
          <div className="cont1NP">
            <div className="txtNuevaP">
              <p>
                En Andina PBA trabajamos con la mirada puesta en el futuro,
                comprometidos con brindar un servicio de beneficio animal que
                cumpla con los más altos estándares de calidad. Implementamos
                procedimientos operativos estandarizados para asegurar la
                inocuidad de los productos cárnicos procesados, promoviendo así
                el consumo de carne legal. Actualmente, estamos avanzando en la
                construcción de nuestra nueva planta en el corregimiento de
                Criollo. Con el apoyo de los Laboyanos, estamos desarrollando el
                megaproyecto agroindustrial cárnico más grande de la región.
              </p>
            </div>
            <div className="contImgInc">
              <img src={Img1} className="ImgContNp" alt="" />
            </div>
          </div>
          <h3 className="tituNuevaPlanta">Así Vamos Avanzando</h3>
          <div className="conAsiVamos">
            <SliderAuto />
          </div>
          <h3 className="tituNuevaPlanta">Nuestra Proyección</h3>
          <div className="nuestraProyeccion">
            <NuestraProyeccion />
          </div>
        </div>
      </div>

      <div
        ref={ref1}
        className={classNames("contUbicacion", {
          animate: inView1,
        })}
      >
        <div className="devDecoracion1" style={{ overflow: "hidden" }}>
          <DecTop />
        </div>
        <div className="contNuestraUbicacion">
          <h3
            className="tituNuevaPlantaUbicacion"
            style={{ color: "aliceblue" }}
          >
            Estamos Ubicados
          </h3>

          <div className="iconMapa">
            <IconMaps />
          </div>

          <div className="boxCajaMapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d996.9310298609576!2d-76.14937804931154!3d1.8564755723739481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1718638533565!5m2!1ses-419!2sco"
              width="350"
              height="250"
              style={{ border: 0, zIndex: 6, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            ></iframe>

            <div className="boxtextoMapa">
              <h2 className="texMapaUbi">
                Kilómetro 12 via Pitalito - San Agustín, Corregimiendo de
                Criollo
              </h2>
            </div>
          </div>
        </div>
        <div className="devDecoracion2">
          <DecTop />
        </div>
      </div>

      <div className="boxServicios">
        <Servicios />
      </div>
      {/* <div className="contNovedades">
        <div className="headerNovedades">
          <div className="tituloNovedades">Actualidad Andina 001</div>
          <div className="fechaNovedades">02/06/2024</div>
        </div>
        <div className="multiNovedades">
          <div className="div1">
            <VideoPlayer
              src={videoSrc}
              poster={posterSrc}
              controls={true}
              autoplay={false}
              loop={false}
              muted={false}
            />
          </div>
        </div>
        <div className="textNovedades">
          <div className="boxTexto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            eligendi aliquam molestiae consequuntur neque reprehenderit
            excepturi deleniti culpa totam. Laudantium, at? Optio enim
            laudantium facilis temporibus odio exercitationem minima corrupti,
            delectus alias, impedit a autem fugit harum voluptas aperiam dicta
            voluptatem eos magni cupiditate in nesciunt? Quidem culpa nihil
            reprehenderit porro, accusantium, voluptates illum dignissimos
            accusamus rem error provident voluptatibus quis ullam. Est impedit
            reprehenderit aliquid quibusdam. Dolor, voluptatem? At reiciendis
            facilis eius suscipit! Magnam adipisci perspiciatis culpa ut
            deleniti, minus voluptatibus tenetur delectus sint, dolor quam qui
            praesentium vero a, vel exercitationem esse. Hic odio sapiente
            veniam vitae enim aliquid est corrupti omnis vel placeat eaque,
            facilis rerum aliquam quae ipsum dolor autem, laudantium sint eos
            veritatis iste tenetur. Voluptates cum nisi obcaecati dolore odit
            molestias quam voluptatum vitae aliquid fugit culpa assumenda eos
            delectus sunt veniam repudiandae nam, perspiciatis quas, neque
            adipisci. Corrupti cumque quibusdam molestias inventore molestiae!
          </div>
        </div>
      </div> */}
    </>
  );
};

export default VistaInicial;
