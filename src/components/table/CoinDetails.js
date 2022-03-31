import React from 'react'
import { UseCryptoContext } from '../../CryptoProvider'
import { savedId } from './TableContent'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(()=>({

    container:{
        display:"flex",
        height:"600px",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    subContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        background:"black",
        padding:"30px",
        borderRadius:"10px",
        boxShadow:"5PX 5PX 10PX BLACK"
    },
    items:{
        color:"white",

    }
}))

function CoinDetails() {
    const classes = useStyle()
    const {cryptoData,currencySymbol} = UseCryptoContext()
    const coinId = savedId
    console.log(coinId)

    const filteredDATA = cryptoData?.filter((item)=> {
        if(coinId==item?.id){
            return item
        }
         })

  return (<div>
         {filteredDATA?.map((item)=>(
             <div className={classes.container}>
            <div className={classes.subContainer}>
                <img className={classes.items} src={item?.image} height='150px'/>
                <h1 className={classes.items} >{item?.name}</h1>
                <p className={classes.items}>{item?.name} is a smart contract platform that enables developers to build tokens and decentralized applications (dapps)</p>
                <h3 className={classes.items} >Rank:  {item?.market_cap_rank}</h3>
                <h3 className={classes.items}>Current Price:  {currencySymbol}{item?.current_price}</h3>
                <h3 className={classes.items}>Market Cap:  {currencySymbol}{item?.market_cap}</h3>
             </div>
            
             </div>
         ))}
      </div>)
  
}

export default CoinDetails
