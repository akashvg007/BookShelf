import React, { useState } from "react";
import Data from "../../DataJson/books";
import Card from "../SliderCard/SliderCard";
import "./BookShelf.css";
// import Slider from "react-slick";
import Carousel from "react-elastic-carousel";
import Item from "./StyledCom";

const BookShelf = (props) => {
  const { handleClick } = props;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
    { width: 1600, itemsToShow: 6 },
    { width: 1900, itemsToShow: 7 },
  ];
  return (
    <div className="shelf-container">
      <div className="slider-title display-flex jstf-ctnt-start align-item-center">
        LOREM IPSUM
      </div>
      <Carousel breakPoints={breakPoints}>
        {Data?.books?.map((d, idx) => (
          <Item>
            <Card click={handleClick} key={d.publisher + "" + idx} data={d} />
          </Item>
        ))}
      </Carousel>
    </div>
  );
};

export default BookShelf;
