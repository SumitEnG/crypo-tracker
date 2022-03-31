import { AppBar, Container, makeStyles, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { UseCryptoContext } from '../../CryptoProvider'

const useStyle = makeStyles(()=>({
    title:{
       color:"gold",
       fontWeight:"bold",
       fontSize:"larger"
    },
    select:{
        height:"40px",
        width:"90px"
    },
    container:{
        display:"flex",
        justifyContent:"space-between",
    }
}))

function Header() {

  const classes = useStyle()

  const {currency,setCurrency} = UseCryptoContext()
  console.log(currency)

  return (
    <div>
      <AppBar color='transparent' position='sticky'>
          <Container>
              <Toolbar className={classes.container}>
                  <Typography variant='h4' className={classes.title} >
                      Crypto Tracker
                  </Typography>
                  <Select variant="outlined" labelId="label" id="select" className={classes.select} value={currency} onChange={(e)=>setCurrency(e.target.value)}>
                     <MenuItem value="INR">INR</MenuItem>
                     <MenuItem value="USD">USD</MenuItem>
                  </Select>
              </Toolbar>
          </Container>
     </AppBar> 
    </div>
  )
}

export default Header
