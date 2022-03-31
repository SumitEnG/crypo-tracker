import React from 'react'
import  {Container, makeStyles, Typography} from '@material-ui/core'
import Carousel from './Carousel/Carousel'
const useStyle=makeStyles(()=>({
    banner: {
        backgroundImage : "url(https://imageio.forbes.com/specials-images/imageserve/5f7c9b094482c8516c07488b/0x0.jpg?format=jpg&width=1200&fit=bounds)",
        height:"300px",
        backgroundSize:"cover",
    },
    title: {
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        color:"White"
    }
}))

function Banner() {
    const classes = useStyle()
  return (
    <div className={classes.banner}>
        <Container className={classes.title}>
            <Typography variant='h3'>
                Crypto Tracker
            </Typography>
            <Typography style={{fontWeight:"bold"}}>
               Get All The Info Regarding Your Favourite Crypto Curruncy
            </Typography>
            <Carousel/>
        </Container>
        
    </div>
  )
}

export default Banner
