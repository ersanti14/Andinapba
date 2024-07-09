import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import "../style/style.css";
import Img8 from "/historia1.jpg";
import Img7 from "/historia2.jpg";
import ImgValor from "/imgValor.jpg";
import ImgEco from "/imgEco.webp";

const NuestraProyeccion = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const [ref3, inView3] = useInView({ threshold: 0.1 });
  const [ref4, inView4] = useInView({ threshold: 0.1 });

  return (
    <div className="contNustraP">
      <div
        ref={ref1}
        className={classNames("boxNuestraP1", "proyeccionGrid", {
          animate: inView1,
        })}
      >
        <div className="proyeccionTitulo">
          <h3 className="tituNuestraProyeccion">IMPACTO EMPRESARIAL</h3>
          <div className="borderNuestraP"></div>
        </div>
        <div className="proyeccionText">
          <p>
            Nos destacamos en la industria cárnica de la región no solo por
            nuestra dedicación a la calidad y seguridad de nuestros servicios,
            sino también por el significativo impacto económico que generamos.
            Impulsamos el crecimiento sostenible y la creación de empleos,
            especialmente con la construcción de nuestra nueva planta. Este
            avance no sería posible sin el firme respaldo de nuestros
            accionistas, quienes comparten nuestra visión de desarrollo y
            excelencia. Gracias a su apoyo, estamos llevando a cabo el mayor
            proyecto ganadero del sur del Huila, elevando los estándares de la
            industria y contribuyendo al fortalecimiento de la economía de
            Pitalito.
          </p>
        </div>
        <div className="proyeccionImg">
          <img src={Img8} className="ImgProyeccion" alt="" />
        </div>
      </div>
      <div
        ref={ref2}
        className={classNames("boxNuestraP2", "proyeccionGrid", {
          animate: inView2,
        })}
      >
        <div className="proyeccionTitulo">
          <h3 className="tituNuestraProyeccion">SOSTENIBILIDAD ECOLÓGICA</h3>
          <div className="borderNuestraP"></div>
        </div>
        <div className="proyeccionText">
          <p>
            En Andina PBA, nos enorgullece mantener altos niveles sanitarios
            mediante la inspección, vigilancia y control del INVIMA. Con 231,594
            cabezas de ganado sacrificadas hasta 2023 , somos la segunda planta
            más grande del departamento del Huila. Cumplimos con todas las
            normas sanitarias, asegurando la inocuidad de nuestros productos y
            minimizando el impacto ambiental. Nuestro compromiso con la
            sostenibilidad se refleja en nuestras prácticas operativas
            responsables, que protegen la salud pública y promueven el bienestar
            del entorno natural.
          </p>
        </div>
        <div className="proyeccionImg">
          <img src={ImgEco} className="ImgProyeccion" alt="" />
        </div>
      </div>
      <div
        ref={ref3}
        className={classNames("boxNuestraP3", "proyeccionGrid", {
          animate: inView3,
        })}
      >
        <div className="proyeccionTitulo">
          <h3 className="tituNuestraProyeccion">CRECIMIENTO EN VALOR</h3>
          <div className="borderNuestraP"></div>
        </div>
        <div className="proyeccionText">
          <p>
          Nuestra meta para 2026 es consolidarnos como la planta de beneficio animal líder a nivel nacional. Este proyecto clave busca modernizar y hacer rentable la agroindustria ganadera, fortaleciendo nuestro compromiso con la calidad y la responsabilidad social. El incremento en el valor de nuestras acciones refleja la solidez de nuestra organización gremial y fortalece la confianza de nuestros inversores. Este crecimiento no solo impulsa nuestra empresa, sino que también contribuye al desarrollo económico y cultural del Huila y el país.
          </p>
        </div>
        <div className="proyeccionImg">
          <img
            src={ImgValor}
            className="ImgProyeccion"
            alt=""
          />
        </div>
      </div>
      <div
        ref={ref4}
        className={classNames("boxNuestraP4", "proyeccionGrid", {
          animate: inView4,
        })}
      >
        <div className="proyeccionTitulo">
          <h3 className="tituNuestraProyeccion">GENERACIÓN DE EMPLEO</h3>
          <div className="borderNuestraP"></div>
        </div>
        <div className="proyeccionText">
          <p>
          Andina PBA se compromete con la generación de empleo como parte esencial de nuestro impacto en la región. Nuestra expansión hacia 2026 no solo apunta a ser líderes en el beneficio animal, sino también a crear numerosas oportunidades de empleo en el departamento del Huila. Como una de las plantas más grandes y modernas, ofrecemos puestos estables y bien remunerados en diversas áreas, asegurando un ambiente laboral seguro y de crecimiento profesional para nuestros empleados.
          </p>
        </div>
        <div className="proyeccionImg">
          <img src={Img7} className="ImgProyeccion" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NuestraProyeccion;
