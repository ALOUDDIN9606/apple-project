import React from "react";
import "./Header_Title.scss"
import { IoIosArrowForward } from "react-icons/io";

const Header_Title = () => {
  return (
    <div className="header__title">
      <p>
        Starting 11/29, get an Apple Gift Card up to $200 when you buy an
        eligible product — online and in-store.<sup>1</sup>
        <a href="" className="header__title__f">Learn more</a><IoIosArrowForward/>
      </p>
    </div>
  );
};

export default Header_Title;