import React, { useState } from 'react'
import HouseContext from '../../../HouseContext'
import { Link } from 'react-router-dom'
import "./Search.css"
import { AiFillHome } from "react-icons/ai";
function Search() {

  const {datas,house, setHouse} = React.useContext(HouseContext);
  const [input, setInput]=useState("");
  function searchFilter(){
    let updateHouse=datas.filter((house)=>{
      return house.name.toLowerCase().includes(input.toLowerCase())
    })
    setHouse(updateHouse);
  }

  return (
    <div className="navSearch">
        <Link to='/'><AiFillHome style={{color:"Green",fontSize:"2.5rem"}}/></Link>
        <h1>Search properties to rent</h1>
        <div className="search">
            <input type="text" placeholder='search'onChange={(e)=>setInput(e.target.value)}/>
            <button className='btn' onClick={()=>searchFilter()}>Search</button>
        </div>
        <Link to='/favourites' className='btn'>Liked</Link>
    </div>
  )
}

export default Search