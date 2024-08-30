import React from "react";
import { HouseContext } from "../../HouseContext";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import "./Dashboard.css";
import Cards from "../Cards/Cards";
function Dashboard() {
  const { houses, setHouses } = React.useContext(HouseContext);

  return (
    <>
      <div className="dashboard">
        <div className="cards">
          {houses.map((house) => {
            return (
              <Cards  key={house.id} house={house}/>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
