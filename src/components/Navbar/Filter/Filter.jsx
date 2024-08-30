import React, { useState } from "react";
import "./Filter.css";
import { HouseContext } from "../../../HouseContext";
function Filter() {

  const { datas, house, setHouse } = React.useContext(HouseContext);
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [prototype, setPrototype] = useState("");

  function searchFilter() {
    let prices = price.split("-");
    let cities=city.toLowerCase();
    let prototypes=prototype.toLowerCase();
    let actuallPrice=price
    console.log(prices,cities,prototypes);
    
    let updateHouse = datas.filter((house) => {
      return (
        house.city.toLowerCase().includes(cities) &&
        house.type.toLowerCase().includes(prototypes) &&
        (house.price >= prices[0] && house.price <= prices[1])
      );
    });
    setHouse(updateHouse);
  }


  return (
    <>
      <div className="filter">
        <div className="filterCards">
          <div className="city filterdiv">
            <p>Enter City</p>
            <input type="text" placeholder="Enter City" onChange={(e) => setCity(e.target.value)}/>
          </div>
          <div className="date filterdiv">
            <p>Date</p>
            <input type="date" onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="price filterdiv">
            <p>Price</p>
            <select name="" id="" onChange={(e) => setPrice(e.target.value)}>
              <option value="0-3000">0-3000</option>
              <option value="0-500">Rs 0 - 500</option>
              <option value="500-1000">Rs 500 - 1000</option>
              <option value="1000-1500">Rs 1000 - 1500</option>
              <option value="1500-2000">Rs 1500 - 2000</option>
              <option value="2000-2500">Rs 2000 - 2500</option>
              <option value="2500-3000">Rs 2500 - 3000</option>
            </select>
          </div>
          <div className="prototype filterdiv">
            <p>Prototype</p>
            <select name="" id="" onChange={(e) => setPrototype(e.target.value)}>
              <option value="All">All</option>
              <option value="House">House</option>
              <option value="pg">pg</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="farm-house">farm-house</option>
              <option value="hotel">hotel</option>
              <option value="oyo">oyo</option>
            </select>
          </div>
          <button className="submit" onClick={()=>searchFilter()}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Filter;
