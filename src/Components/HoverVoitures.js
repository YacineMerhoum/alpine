import React from "react";
import Voiture1 from "../images/sources-homepage/galerie/A110_LEGENDE_1.jpg";
import Voiture2 from "../images/sources-homepage/galerie/A110_LEGENDE_5.jpg";

const HoverVoitures = () => {
  return (
    <div class="container text-center">
      <div class="d-flex justify-content-center">
        <div class="col-2 hoverCar"> </div>

        <div class="col-4 hoverCar mt-5 mb-5 me-1">
          {" "}
          <img className="w-100" src={Voiture1} />
          <div class="image-text font">ORIGINE DE LA MARQUE</div>
        </div>

        <div class="col-4 hoverCar mt-5 mb-5 ">
          <img className="w-100" src={Voiture2} />
          <div class="image-text font">UNE MARQUE DE VALEURS</div>
        </div>
        <div class="col-2 hoverCar"> </div>
      </div>
    </div>
  );
};

export default HoverVoitures;
