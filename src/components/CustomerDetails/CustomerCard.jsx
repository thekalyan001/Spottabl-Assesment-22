//in search box suggestion list

import React from "react";
import user from "../../assets/user.png";
import "./CustomerCard.css";

//react icon
import { GoPrimitiveDot } from "react-icons/go";
import { ImUserTie } from "react-icons/im";

const CustomerCard = (props) => {
  //destructure
  const { firstName, lastName, position, email } = props.customer; //props from searchBox

  return (
    <>
      <div className="customerCard">
        <div className="image-user">
          <p>
            {firstName[0]}
            {lastName[0]}
          </p>
        </div>
        <div className="UserDetailText">
          <h4 className="CustomerName">
            {firstName} {lastName}
          </h4>
          <p className="CustomerDetails">
            <ImUserTie /> {position} <GoPrimitiveDot /> {email}
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomerCard;
