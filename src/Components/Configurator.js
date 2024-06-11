import React from "react";
import Navbar from "./Navbar";
import ColorWhite from "../images/configurateur/couleurs/selection/blanc.jpg";
import ColorBlue from "../images/configurateur/couleurs/selection/bleu.jpg";
import ColorBlack from "../images/configurateur/couleurs/selection/noir.jpg";
import { useDispatch, useSelector } from "react-redux";
import { nameVoiture, ColorCarBlue, price } from "../features/CarSlice";
// SELECT JANTES 
import JantesStandard from "../images/configurateur/jantes/selection/jante-standard.jpg"
import JantesSerac from "../images/configurateur/jantes/selection/jante-serac.jpg"
import JantesLegend from "../images/configurateur/jantes/selection/jante-legende.jpg"



let index = 0;

const Configurator = () => {
  const dispatch = useDispatch();
  const car1 = useSelector((state) => state.car.carDefinitif);

  const handleCarChoice = () => {
    if (index === 2) {
      index = 0;
    }
    dispatch(nameVoiture(index));
    index++;
  };

  const handleColorChange = (colorIndex) => {
    dispatch(ColorCarBlue({ carIndex: index - 1, colorIndex }));
  };

  return (
    <>
      <Navbar />

      <h1 className="font text-center">Configurateur</h1>

      <div className="font accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Changer le modèle du véhicule
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <button onClick={handleCarChoice}>Changer la voiture</button>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Changer la couleur
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="container text-center mb-2">
                <div className="row align-items-start">
                  <div className="col">
                    <img
                      className="SelectColor ms-5"
                      src={ColorWhite}
                      alt="Blanc"
                      onClick={() => handleColorChange(2)}
                    />
                  </div>
                  <div className="col">
                    <img
                      className="SelectColor"
                      src={ColorBlue}
                      alt="Bleu"
                      onClick={() => handleColorChange(0)}
                    />
                  </div>
                  <div className="col">
                    <img
                      className="SelectColor me-5"
                      src={ColorBlack}
                      alt="Noir"
                      onClick={() => handleColorChange(1)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Choix des jantes 
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="container text-center mb-2">
                <div className="row align-items-start">
                  <div className="col">
                    <img
                      className="SelectColor ms-5"
                      src={JantesStandard}
                      alt="Standard"
                      onClick={() => handleColorChange(2)}
                    />
                  </div>
                  <div className="col">
                    <img
                      className="SelectColor"
                      src={JantesSerac}
                      alt="Serac"
                      onClick={() => handleColorChange(0)}
                    />
                  </div>
                  <div className="col">
                    <img
                      className="SelectColor me-5"
                      src={JantesLegend}
                      alt="Legend"
                      onClick={() => handleColorChange(1)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Autre 
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              fourth item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
      {/* SEPARATIPN */}
      <div className="text-center">
        <p className="font titlecar"><strong>{car1.nameCar}</strong></p>
        <p>Prix : {car1.prix}€ </p>
        <img className="imageConfig" src={car1.photo} />
      </div>
    </>
  );
};

export default Configurator;
