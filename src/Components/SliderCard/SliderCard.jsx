import React from "react";
import "./SliderCard.css";

const SliderCard = (props) => {
  const {
    publisher,
    description,
    title,
    author,
    book_image,
    rating,
  } = props.data;
  return (
    <div
      className="book-wrapper pos-rel transition cur-pointer"
      onClick={(e) => props.click(props.data)}
    >
      <img src={book_image} alt="book" />
      <div className="rating-book pos-abs">{`${rating} out of 5`}</div>
      <div className="pos-abs book-details">
        <div className="book-title">{title}</div>
        <div className="book-author-name">{author}</div>
        <div className="book-publisher">{publisher}</div>
      </div>
    </div>
  );
};

export default SliderCard;
