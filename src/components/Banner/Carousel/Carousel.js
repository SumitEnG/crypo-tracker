import { makeStyles } from '@material-ui/core'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { UseCryptoContext } from '../../../CryptoProvider'

  const useStyle = makeStyles(()=>({
       carausel:{
           height:"50%",
           display:"flex",
           alignItems:"center",
           paddingTop:"25px",
           width:"100%"
       },
       carauselImage:{
           display:"flex",
           flexDirection:"column",
           alignItems:"center",
       },
       aboutCoin : {
           display:"flex",
           flexDirection:"column",
           alignItems:"center"
       }
  }))

function Carousel() {

    const classes=useStyle()

    const {currencySymbol,cryptoData} = UseCryptoContext()




const items = cryptoData?.map((coin)=>{

    const profit = coin?.price_change_percentage_24h >= 0

    return(
        <div className={classes.carauselImage}>
            <img src={coin?.image}
            height="80"/>
            <p className={classes.aboutCoin}>
                <span>
                <span style={{marginRight:"5px"}}>{coin?.symbol}</span>
                {profit && '+'}
               <span
               style={{
                   color : profit ? 'green' : 'red',
                   fontWeight : "bold"
               }}>{coin?.price_change_percentage_24h?.toFixed(2)}%</span> 
               </span>
                
            <span>{currencySymbol}</span>
            <span>{currencySymbol}{coin?.current_price?.toFixed(2)}</span>
            </p>
        </div>

    )
})

    const responsive={
        0:{
            items:2,
        },
        512:{
            items:4
        }
    }

  return (
    <div className={classes.carausel}>
      <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={2000}
            animationDuration={1500}
            autoPlayDirection="rtl"
            autoPlay={true}
            disableButtonsControls
            disableDotsControls
            responsive={responsive}
            items={items}    
      />
    </div>
  )
}

export default Carousel

