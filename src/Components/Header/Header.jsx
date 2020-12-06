import React from "react";
import logo from "../../assets/bmuse_logo.png";
import search from "../../assets/search.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="display-flex jstf-ctnt-sp-btwn">
        <div className="logo pad-10 display-flex">
          <div className="firstSectionLogo">Book</div>
          <div className="lastSectionLogo">Shelf</div>
          {/* <img src={logo} alt="bmuse" /> */}
        </div>
        <div className="search pad-10 cur-pointer">
          <img src={search} alt="search" />
        </div>
      </div>
      <div className="display-flex flex-dir-col jstf-ctnt-start heading-container">
        <div className="heading">{"Bookshelf & Book Racks"}</div>
        <div className="description-shelf">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
    </div>
  );
};

export default Header;
