import logoCompany from "../../assets/logoCompany.jpg";
import React from "react";
import "./headerPart.css";
import SearchBox from "../SearchBoxAndList/SearchBox";

export default function HeaderPart() {
  return (
    <>
      <div className="HeaderPartCont">
        <div className="header">
          <img className="image-company" src={logoCompany} alt="logo" />
          <div className="text-holder">
            <h1 className="main-heading">Your spottabl Team</h1>
            <p className="secondary-heading">
              Spottabl supports you all throughout
            </p>
          </div>
        </div>

        {/* customer success managers */}
        <div className="user_list">
          <h2>Customer Success Managers</h2>

          <SearchBox />
        </div>
      </div>
    </>
  );
}
