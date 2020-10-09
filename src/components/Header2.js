import React from "react";
import "../CSS/Header2.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { useStateValue } from "../StateProvider";
const Header2 = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="header2">
      <div className="header2__logoOptions">
        <scan className="header2__logo">
          <LocationOnOutlinedIcon />
        </scan>
        <div className="header2__options">
          <span className="header2__optionsLineOne">Deliver to</span>
          <span className="header2__optionLineTwo">Buea, Cameroon</span>
        </div>
      </div>

      <div className="header2__otherOptions">
        <div className="header2__otherOptions2">
          <span> Today's Deals</span>
        </div>
        <div className="header2__otherOptions2">
          <span> Amazon.com </span>
        </div>
        <div className="header2__otherOptions2">
          <span>Customer Service</span>
        </div>
        <div className="header2__otherOptions2">
          <span>Browsing History</span>
        </div>
        <div className="header2__otherOptions2">
          <span>Buy Again</span>
        </div>
        <div className="header2__otherOptions2">
          <span>Gifts Cards</span>
        </div>
        <div className="header2__otherOptions2">
          <span className="registry">Registry</span>
        </div>
      </div>
    </div>
  );
};

export default Header2;
