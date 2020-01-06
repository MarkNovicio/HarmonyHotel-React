import React from "react";
import "../index.css";
import { IMAGES } from "../shared/images";

import Slider from "infinite-react-carousel";
import { CSSTransition } from "react-transition-group";
//map through IMAGES

const images = IMAGES.map(imagery => (
  <div className="image-boundary">
    <img className="image-size" src={imagery.image} />
    <p> {imagery.description} </p>
  </div>
));

const SimpleSlider = () => (
  <>
    <CSSTransition classNames="page" timeout={1000}>
      <Slider dots>{images}</Slider>
    </CSSTransition>
  </>
);

export default SimpleSlider;
