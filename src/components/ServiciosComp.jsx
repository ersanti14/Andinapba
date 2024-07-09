import React from "react";
import Img8 from "/historia1.jpg";
import "../style/style.css";
import IconRes from "../Icons/IconCarne";
import IconVaca from "../Icons/IconVaca";
import IconCamion from "../Icons/IconCamion";

export const Servicios = () => {
  return (
    <>
      <div className="cajaServicios">
        <div className="boxTitulosServicios">
          <h2 style={{ fontWeight: 600 }}>¿Qué Servicios Ofrecemos?</h2>
        </div>
        <div className="boxServicosCont">
          <div className="ImgServicios">
            <IconVaca />
          </div>
          <div className="textServicios">
            <h5 style={{marginRight:"60px"}}>Servicios 1</h5>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              sed Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat, ipsam quae suscipit nemo voluptatum omnis deserunt ex quis
              dolorem rerum perferendis sed. Quo enim assumenda placeat impedit
              possimus voluptate quos!.
            </span>
          </div>
          <span className="DecServicios"></span>
        </div>
        <div className="boxServicosCont">
          <div className="ImgServicios">
            <IconRes />
          </div>
          <div className="textServicios">
          <h5 style={{marginRight:"60px"}}>Servicios 2</h5>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              sed Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat, ipsam quae suscipit nemo voluptatum omnis deserunt ex quis
              dolorem rerum perferendis sed. Quo enim assumenda placeat impedit
              possimus voluptate quos!.
            </span>
          </div>
          <span className="DecServicios"></span>
        </div>
        <div className="boxServicosCont">
          <div className="ImgServicios">
            <IconCamion />
          </div>
          <div className="textServicios">
          <h5 style={{marginRight:"60px"}}>Servicios 3</h5>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              sad Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugiat, ipsam quae suscipit nemo voluptatum omnis deserunt ex quis
              dolorem rerum perferendis sed. Quo enim assumenda placeat impedit
              possimus voluptate quos!.
            </span>
          </div>
          <span className="DecServicios"></span>
        </div>
      </div>
    </>
  );
};

export default Servicios;
