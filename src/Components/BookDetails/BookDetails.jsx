import React from "react";
import "./BookDetails.css";

const BookDetails = (props) => {
  const { title, book_image, author, description, publisher } = props.data;
  return (
    <div className="display-flex pos-rel">
      <div className="left-section">
        <div className="book-name">{title}</div>
        <div className="book-image">
          <img src={book_image} alt="" />
        </div>
        <div className="add-fav-btn">
          <span className="fav">Add to Favorites</span>
          <span className="add-plus">+</span>
        </div>
      </div>
      <div className="book-body">
        <div className="book-author">{author}</div>
        <div className="book-publisher">{publisher}</div>
        <div className="book-description">{description}</div>
      </div>
      <div className="close pos-abs cur-pointer">
        <div onClick={props.handleClose}>
          <img src="/assets/close.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
