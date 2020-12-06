import React, { useState, useRef } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Slider from "./Components/BooksShelf/BookShelf";
import BookDetails from "./Components/BookDetails/BookDetails";

const App = () => {
  const [openShelf, setOpendShelf] = useState(false);
  const [bookData, setBookData] = useState({});
  const mainBody = useRef(null);
  const bookClick = (book) => {
    setOpendShelf(true);
    setBookData(book);
    console.log("book clicked!!", book);
    setTimeout(() => {
      console.log("mainbody==>", mainBody.current);
      mainBody.current.scrollTop = mainBody.current.scrollHeight;
    }, 100);
  };
  return (
    <div className="main-wrapper" ref={mainBody}>
      <div>
        <Header />
      </div>
      <div className="book-shelf-wrapper">
        <Slider handleClick={bookClick} />
      </div>
      {openShelf && (
        <div className="book-open">
          <BookDetails
            handleClose={(e) => setOpendShelf(false)}
            data={bookData}
          />
        </div>
      )}
    </div>
  );
};

export default App;
