import React, { useState } from "react";
import "./AllCsmCustomer.css";
import user from "../../assets/user.png";
//react icon
import { FaTrash } from "react-icons/fa";

const AllCsmCustomer = (props) => {
  const setCustomerListCSM = props.setCustomerListCSM; //update state

  let items = [];
  if (props.customerListCSM)
    // empty array here
    props.customerListCSM.map((ele) => {
      items.push(ele.value);
    });

  // console.log(items.length)
  // for(var i=0;i<items.length;i++){
  //   console.log(items[i])
  // }

  const deleteContactHandler = (id) => {
    const newCustomerlist = items.filter((customer) => {
      return customer.id !== id;
    });
    items = [...newCustomerlist];
    setCustomerListCSM(newCustomerlist);
  };

  return (
    <>
      {items.length > 0 &&
        items.map((param, key) => {
          //console.log(typeof(param)) string
          //console.log(param) // Vanishri,Mishra,Talent Aquisition specialist,vaani@spottabl.com
          
          const [firstName, lastName, position, email] = param.split(","); //destructure
          //console.log(firstName, lastName, position, email) //
          return (
            <div className="AllCsmCustomer" key={key}>
              <div className="image-user">
                <p>
                  {firstName.length > 1 ? firstName[0] : lastName[0]}
                  {lastName.length > 0 ? lastName[0] : firstName[0]}
                </p>
              </div>
              <div className="UserDetailText">
                <h4 className="CustomerName">
                  {firstName} {lastName}
                </h4>
                <p className="CustomerDetails">{position}</p>
              </div>

              <FaTrash
                className="trash"
                onClick={() => {
                  deleteContactHandler({key});
                }}
              />
            </div>
          );
        })}
    </>
  );
};
export default AllCsmCustomer;
