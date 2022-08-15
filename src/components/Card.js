import React from "react";
import "../datos";
import "./Card.css";
import img1 from "../assets/cuentos/1.png";
import img2 from "../assets/cuentos/2.png";
import img3 from "../assets/cuentos/1.png";
import img4 from "../assets/cuentos/4.png";
import img5 from "../assets/cuentos/5.png";
import img6 from "../assets/cuentos/6.png";
import img7 from "../assets/cuentos/7.png";

const datosCuentos = [
  {
    id: 1,
    nombre: "Flopy y el cerebro dormilón",
    id_Scratch: 721835350,
    autores: "Sofía Coñuecar Silva",
    imagen: img1,
  },
  {
    id: 2,
    nombre: "Flopy y el mundo de las verdufrutas",
    id_Scratch: 721836947,
    autores: "Sofía Coñuecar Silva",
    imagen: img2,
  },
  {
    id: 3,
    nombre: "Flopy y su abuelita enferma",
    id_Scratch: 721837588,
    autores: "Sofía Coñuecar Silva",
    imagen: img3,
  },

  {
    id: 4,
    nombre: "Flopy y las legumbres",
    id_Scratch: 713182857,
    autores: "Sofía Coñuecar Silva",
    imagen: img4,
  },
  {
    id: 5,
    nombre: "Flopy y y la caida",
    id_Scratch: 721838286,
    autores: "Sofía Coñuecar Silva",
    imagen: img5,
  },
  {
    id: 6,
    nombre: "Flopy y la caleta",
    id_Scratch: 721838701,
    autores: "Sofía Coñuecar Silva y Maryelsa Rojas Lopéz",
    imagen: img6,
  },
  {
    id: 7,
    nombre: "Flopy y las pastillas magicas",
    id_Scratch: 721838974,
    autores: "Sofía Coñuecar Silva y Maryelsa Rojas Lopéz",
    imagen: img7,
  },
];

// const linkImg1 = "./assets/cuentos/";
// const linkImg2 = ".png";

const linkScratch1 = "https://scratch.mit.edu/projects/";
const linkScratch2 = "/embed";
function Card() {
  return (
    <>
      {datosCuentos.map(({ id, nombre, id_Scratch, autores, imagen }) => (
        <div className="col-md-4" key={id}>
          <div className="card-deck">
            <div className="card h-60">
              <img className="imagenCuento" src={imagen} alt={nombre} />
              <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">
                  <small className="text-muted">{autores}</small>
                </p>
                <a
                  className="btn btn-info"
                  key={id}
                  href={linkScratch1 + id_Scratch + linkScratch2}
                  role="button"
                >
                  PRESIONA AQUÍ
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
