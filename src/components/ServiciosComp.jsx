import React from "react";
import "../style/style.css";
import IconRes from "../Icons/IconCarne";
import IconVaca from "../Icons/IconVaca";
import IconCamion from "../Icons/IconCamion";
import IconPesa from "../Icons/IconPesa";

export const Servicios = () => {
  return (
    <>
      <div className="cajaServicios">
        <div className="boxTitulosServicios">
          <h2 style={{ fontWeight: 600 }}>¿Qué Servicios Ofrecemos?</h2>
        </div>

        <div className="boxServicosCont">
          <div className="ImgServicios">
            <IconPesa />
          </div>
          <div className="textServicios">
            <h5 className="letraServicios" style={{ marginRight: "60px" }}>
              Recepción y Sacrificio Humanitario
            </h5>
            <span>
              Recibimos y pesamos el ganado al llegar a nuestras instalaciones.
              Realizamos el sacrificio con procedimientos humanitarios,
              incluyendo el aturdimiento y el desangrado. Esto minimiza el
              sufrimiento del animal y garantiza la calidad óptima de la carne.
            </span>
          </div>
          <span className="DecServicios"></span>
        </div>
        <div className="boxServicosCont">
          <div className="ImgServicios">
            <IconVaca />
          </div>
          <div className="textServicios">
            <h5 className="letraServicios" style={{ marginRight: "60px" }}>Despiece y Procesamiento</h5>
            <span>
              Nos encargamos del desollado, eviscerado y corte de las canales,
              dividiéndolas en cortes primarios y secundarios. Este proceso
              asegura que la carne esté lista para su distribución y consumo.
            </span>
          </div>
          <span className="DecServicios"></span>
        </div>
        <div className="boxServicosCont">
          <div className="ImgServicios">
            <IconRes />
          </div>
          <div className="textServicios">
            <h5 className="letraServicios" style={{ marginRight: "60px" }}>
              Control de Calidad y Seguridad Alimentaria
            </h5>
            <span>
              Implementamos estrictas inspecciones y certificaciones sanitarias
              para asegurar que nuestra carne cumpla con todas las normativas y
              estándares de seguridad alimentaria, garantizando productos
              seguros para el consumo.
            </span>
          </div>
          <span className="DecServicios"></span>
        </div>
        <div className="boxServicosCont">
          <div className="ImgServicios">
            <IconCamion />
          </div>
          <div className="textServicios">
            <h5 className="letraServicios" style={{ marginRight: "60px" }}>Logística y Distribución</h5>
            <span>
              Ofrecemos servicios de empaque y transporte de productos cárnicos,
              preservando su frescura y calidad. Aseguramos una entrega
              eficiente a puntos de venta, mayoristas y minoristas, cumpliendo
              con las necesidades del mercado.
            </span>
          </div>
          <span className="DecServicios"></span>
        </div>
      </div>
    </>
  );
};

export default Servicios;
