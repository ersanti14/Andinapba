import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/slide.css";
import IconEyes from "../Icons/IconEyes";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const images = [
  {
    titulo: "Fase 1 Andina PBA",
    src: "/fase1.jpg",
    pieDeTexto: "Apertura de vía y reconocimiento del lote",
},
{
    titulo: "Fase 2 Andina PBA",
    src: "/fase2.jpg",
    pieDeTexto: "Raspando del terreno y limpia de área a construir",
},
{
    titulo: "Fase 3 Andina PBA",
    src: "/fase3.jpg",
    pieDeTexto: "Vía de ingreso marcada y aplanada",
},
{
    titulo: "Fase 4 Andina PBA",
    src: "/fase4.jpg",
    pieDeTexto: "Marcando el lote a construir y rellenando el terreno",
},
{
    titulo: "Fase 5 Andina PBA",
    src: "/fase5.jpg",
    pieDeTexto: "Nivelacion del lote y estableciendo el terreno para construcción",
},
{
    titulo: "Fase 6 Andina PBA",
    src: "/fase6.jpg",
    pieDeTexto: "Toma del área del lote y marcado de planos de la vía interna de la nueva planta",
},
{
    titulo: "Fase 7 Andina PBA",
    src: "/fase7.jpg",
    pieDeTexto: "Vía alterna y lote demarcado",
},
{
    titulo: "Fase 8 Andina PBA",
    src: "/fase8.jpg",
    pieDeTexto: "Construcción de bodega y vías internas demarcadas para seguir avanzando",
}

];

const SliderAuto = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [ref1, inView1] = useInView({ threshold: 0.1 });

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        ref={ref1}
        className={classNames("slider-container",{
          animate: inView1,
        })}
      >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="contBoxCarts" key={index}>
            <div className="boxCardsP">
              <span className="atributosT">{image.titulo}</span>

              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="boxImgCards "
                onClick={() => setSelectedImage(image)}
              >
                <div className="boxImgCardsHover">
                  <p>
                    Ver <IconEyes />
                  </p>
                </div>
                <img
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="pieCards">
                <div className="boxTextCards">
                  <span className="texCards"><div className="punto"></div>{image.pieDeTexto}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          {selectedImage && (
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {selectedImage.titulo}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.titulo}
                  style={{ width: "100%", height: "100%" }}
                />
                <p>{selectedImage.pieDeTexto}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    
    </>
  );
};

export default SliderAuto;
