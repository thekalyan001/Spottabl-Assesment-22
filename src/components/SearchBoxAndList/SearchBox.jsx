import React, { useState } from "react";
import Select from "react-select";
import "./searchBox.css";
import CustomerCard from "./../CustomerDetails/CustomerCard";
import options from "./options.json";
//show CSM customer detail
import AllCsmCustomer from "./../CustomerDetails/AllCsmCustomer";

export default function SearchBox() {
  const [selectedOption, setSelectedOption] = useState([]); //for serach box
  const [customerListCSM, setCustomerListCSM] = useState([]); //csm clicked

  const handleChange = (param) => {
    //console.log(param)
    setSelectedOption([]);
    param.map((val) => {
      //console.log(ele)
      setSelectedOption((e) => {
        return [...e, val]; //using spread on iterable
      });
    });
    // setSelectedOption([]);
  };

  //clicking on cdm button
  function addTolistCSM() {
    //console.log(selectedOption)
    setCustomerListCSM((prevStat) => [...prevStat, ...selectedOption.slice()]);
    setSelectedOption([]); //empty the searchbox use state value clear
  }

  const listViewOfUser = options.map((customer) => {
    return {
      value: Object.values(customer).join(","),
      label: <CustomerCard customer={customer} />
    };
  });

  return (
    <>
      <div className="search_and_csm">
        <div className="searchBox" style={{ fontFamily: "sans-serif" }}>
          <Select
            isMulti={true}
            value={selectedOption}
            onChange={handleChange}
            options={listViewOfUser}
            placeholder={"Add by Name or email"}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
              ClearIndicator: () => null //remove x
            }}
            // isClearable={false} remove x
          />
        </div>
        <input
          type="button"
          value="Add CSM"
          className="add_csm"
          onClick={addTolistCSM}
        />
      </div>
      <div>
        {customerListCSM.length >= 0 && (
          <AllCsmCustomer
            customerListCSM={customerListCSM}
            setCustomerListCSM={setCustomerListCSM}
          />
        )}
      </div>
    </>
  );
}
