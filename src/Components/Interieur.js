import React from "react";
import Voiture1 from "../images/sources-homepage/interieur/interieur_2_desktop.png"
import Voiture2 from "../images/sources-homepage/interieur/interieur_desktop.png"

const Interieur = () => {
  return (
    <>
    <div class=" text-center interieur">
      <div class="row align-items-center">
        <div class="col-4"></div>
        <div class="col-4">
          <h5 className="interieurTitle font m-5">Un intérieur de luxe</h5>
          <p className="font text-white mt-3 fw-bold">
            L'intérieur de l'Alpine A110 allie élégance et sportivité, avec des
            matériaux de haute qualité, des sièges enveloppants et une ergonomie
            pensée pour une expérience de conduite exceptionnelle.
          </p>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
    <div class=" text-center interieur">
      <div class="d-flex justify-content-center">
        <div class="col-2 hoverCar"> </div>

        <div class="col-4 hoverCar mt-5 mb-5 me-1">
          {" "}
          <img className="w-100" src={Voiture1} />
          <div class="image-text font">FUTURISTE</div>
        </div>

        <div class="col-4 hoverCar mt-5 mb-5 ">
          <img className="w-100 h-100" src={Voiture2} />
          <div class="image-text font">SPORTIVE</div>
        </div>
        <div class="col-2 hoverCar"> </div>
      </div>
    </div>
    <div className="text-center interieur pb-5">
        <h5 className="stylo">"Dans la plus pure tradition de l'élégance à la française"</h5>
    </div>
    </>

  );
};

export default Interieur;
