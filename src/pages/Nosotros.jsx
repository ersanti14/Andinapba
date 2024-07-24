import React, { useEffect, useState } from "react";
import Img7 from "/7.jpg";
import Img8 from "/historia1.jpg";
import Img4 from "/historia2.jpg";
import BobinosFondo from "/bovinos.jpg";

export const Nosotros = () => {
  return (
    <>
      <div className="contPNovedades">
        <div className="bobinos">
          <img className="bobinosFondo" src={BobinosFondo} alt="" />
        </div>
        <div className="contNosotros slide-top">
          <div className="contTitulo ">
            <h1 className="tituloNosotros tracking-in-contract">
              {" "}
              ASEGACAR DEL HUILA S.A.S | ANDINA PLANTA DE BENEFICIO ANIMAL
            </h1>
          </div>
          <div className="boxNosotros ">
            <div className="boxMision">
              <h2 className="segTitNosotros">Misión</h2>
              <p className="texPNosotros slide-left">
                Brindar Servicio de beneficio animal, garantizando
                procedimientos operativos estandarizados que garanticen la
                inocuidad de los productos cárnicos procesados, generando el
                fortalecimiento del consumo de carne legal, confianza y
                satisfacción en sus clientes, asegurando la calidad sanitaria,
                la integración eficaz a las cadenas productivas, en una sólida
                organización gremial, que contribuye con el desarrollo
                económico, el equilibrio social y la conservación del medio
                ambiente.
              </p>
              <div className="contImgNosotros">
                <img className="imgMision" src={Img4} alt="Foto1" />
              </div>
            </div>
            <div className="boxVision">
              <h2 className="segTitNosotros">Visión</h2>
              <p className="texPNosotros slide-left">
                Consolidarnos como una planta de beneficio animal lider para el
                año 2026 en el ámbito nacional, hacer de la agroindustria
                ganadera una actividad moderna, rentable, solidaria,
                ambientalmente sostenible y socialmente responsable, generando
                bienestar integral al gremio ganadero, contribuyendo en el
                desarrollo económico, social, cultural y de salud pública del
                país.
              </p>
              <div className="contImgNosotros">
                <img className="imgMision" src={Img8} alt="Foto1" />
              </div>
            </div>
            <div className="boxHistoria">
              <h2 className="terTitNosotros">Historia</h2>
              <p className="texPNosotros slide-left">
                Desde el año 2012 La Asociación Surcolombiana de
                Comercializadores de carnes y derivados (Asurcar), tomó la
                administración de la planta de beneficio animal de Pitalito,
                este grupo de ganaderos y comercializadores de carne Laboyanos,
                identificaron en la planta, una gran oportunidad de negocio que
                les permitiría el fortalecimiento gremial y mejorar la
                prestación de los servicios del establecimiento. Posteriormente
                fue fundada La sociedad por acciones simplificada ASEGACAR DEL
                HUILA SAS, El 11 de enero de 2013, la cual se estableció con el
                objetivo de liderar y gestar los inicios del gran proyecto de la
                nueva planta de beneficio animal de categoría nacional. Durante
                el periodo de los años 2012-2023 cumplió una representativa
                cifra de 231.594 cabezas beneficiadas, lo cual nomina a la
                planta de beneficio animal como la segunda más importante del
                Departamento del Huila. El año 2024 ha marcado la Historia de la
                empresa, se ha dado inicio a la construcción del Megaproyecto
                Agroindustrial Cárnico más grande de la Región, hoy con el apoyo
                de los Laboyanos, Surhuiesenses y Colombianos estamos sumando
                esfuerzos para seguir brindando un servicio de primera necesidad
                para el Sur del Huila .
              </p>
              <div className="contImgNosotrosH">
                <img className="imgMisionH" src={Img4} alt="Foto1" />
                <img className="imgMisionH" src={Img8} alt="Foto1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
