import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { TrendingCoins } from './api';

const CryptoContext = createContext()

const CryptoProvider = ({children}) => {

    const [currency,setCurrency]=useState('INR')
    const [currencySymbol,setCurrencySymbol]=useState('₹')
    const [cryptoData,setCryptoData] = useState([])
 
    
const fetchData = async() => {

    await axios.get(TrendingCoins(currency))
    .then((res)=>setCryptoData(res.data))
}

  useEffect(()=>{
      if(currency === 'INR'){
          setCurrencySymbol('₹')
      }else if(currency === 'USD'){
          setCurrencySymbol('$')
      }

      fetchData()
      
  },[currency])

    return(<>
             <CryptoContext.Provider value={{currency,setCurrency,currencySymbol,cryptoData }}>
                {children}
             </CryptoContext.Provider>
        </>)
}

export const UseCryptoContext = () => useContext(CryptoContext)

export default CryptoProvider