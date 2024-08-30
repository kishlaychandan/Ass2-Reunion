import React from 'react'
import HouseContext from '../../HouseContext'
import Cards from '../Cards/Cards'
function Favourites() {
    const {like, setLike} = React.useContext(HouseContext)
  return (
     <>
        <div className="favourities">
            <h1>Favourites</h1>
            <div className="cards">
                {like.map((house) => {
                    return (
                        <Cards key={house.id} house={house}/>
                    )
                })}
            </div>
        </div>
     </>
  )
}

export default Favourites