import React from 'react'
import { FaHeart } from "react-icons/fa6";
import './Cards.css'
import { HouseContext } from '../../HouseContext';

function Cards({ house }) {
    const{like, setLike} = React.useContext(HouseContext);
    function toggleAddToLike(house){
        if(like.includes(house)){
            setLike(like.filter((h)=>h!==house))
        }else{
            setLike([...like,house])
        }
    }
  return (
    <div key={house.id} className="card">
                <img
                  width={200}
                  height={200}
                  src={house.image}
                  alt={house.name}
                />
                <div className="details">
                  <div className="priceFav">
                    <p className="price">Rs. {house.price}/day</p>
                    <div className="fav">
                      <FaHeart onClick={() => toggleAddToLike(house)} style={{ color: like.includes(house) ? "red" : "gray" }} className='heart'/>  
                    </div>
                  </div>
                  <h3 className="name">{house.name}</h3>
                  <p className="location">{house.address}</p>
                  <hr className="hr" />
                  <div className="size">
                    <p>{house.info.bed} beds</p>
                    <p>{house.info.bathrooms} baths</p>
                    <p>{house.info.area}</p>
                  </div>
                </div>
              </div>
  )
}

export default Cards