import { createContext , useState} from 'react'
import data from './data.jsx'
import React from 'react'
export const HouseContext = createContext();

export const HouseProvider=({children})=> {
    const[datas,setDatas]=useState(data)
    const [houses, setHouse] = useState(datas);
    const [like, setLike] = useState([]);
    return (
        <>
            <HouseContext.Provider value={{datas,houses, setHouse,like, setLike}}>
                {children}
            </HouseContext.Provider>
        </>
  )
}

export default HouseContext
