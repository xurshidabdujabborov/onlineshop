import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shop from "../../img/shop.jpg";
import shop3 from "../../img/shop3.webp";
import shop4 from "../../img/shop4.webp";
import shop5 from "../../img/shop5.webp";
import "./Header.css";
import { Container } from "@mui/material";

function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container maxWidth="xl">
    <header className="Carusel">
      <Slider {...settings}>
        <div className="img">
          <img src={shop} alt="" />
        </div>
        <div className="img">
          <img src={shop5} alt="" />
        </div>
        <div className="img">
          <img src={shop4} alt="" />
        </div>
        <div className="img">
          <img src={shop3} alt="" />
        </div>
      </Slider>
    </header>
    </Container>
  );
}

export default Header;
