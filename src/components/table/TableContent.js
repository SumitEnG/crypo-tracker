import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { hover } from '@testing-library/user-event/dist/hover'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseCryptoContext } from '../../CryptoProvider'

export let savedId=''

const useStyle=  makeStyles(()=>({
  tableHead:{
     background:"yellow"
  },
  table:{
    minWidth:650,
  },
  tableBody:{
    color:"WHITE"
  },
  searchBar:{
    width:"100%",
    paddding:"20px",
    marginTop:"15px",
    fontWeight:"bold",
    color:"white"
  },
  coinName:hover={
    cursor: "pointer"
  }
}))
 
function TableContent() {
   const [filterredData,setFilterredData] = useState('')

   const navigate = useNavigate()

   const classes= useStyle()

   const {cryptoData,currencySymbol} = UseCryptoContext()

   const navigateToDetails = (id) => {
     navigate('/details')
      savedId = id  
     console.log(savedId)
   }

 console.log(cryptoData)
  return (
    <div>
      <TextField className={classes.searchBar} id="outlined-basic" label="Search for a crypto currency" variant="outlined" onChange={(e)=>setFilterredData(e.target.value)}/>
      <TableContainer style={{height:"280px",overflowY:"scroll"}}>
          <Table aria-label="simple table" className={classes.table}>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell> Coin </TableCell>
                <TableCell align="right"> Price </TableCell>
                <TableCell align="right"> 24Change </TableCell>
                <TableCell align="right"> Market Cup </TableCell>
              </TableRow>
            </TableHead>
            <TableBody >

              {cryptoData?.filter((item)=>{
                if(filterredData === ''){
                  return item
                }else if (item?.name.toLowerCase().includes(filterredData.toLowerCase())){
                  return item
                }
              }).map((item)=>{
                let profit = item?.price_change_percentage_24h >= 0
                return(
                <TableRow >
                  <TableCell className={classes.tableBody} style={{
                    display:"flex",
                    alignItems:"center",
                  }}>   
                      <img src={item?.image} height='40'/>
                      <span style={{marginLeft:"10px"}} className={classes.coinName} onClick={()=>navigateToDetails(item?.id)}>{item?.name}</span>
                  </TableCell>
                  <TableCell className={classes.tableBody} align="right">{currencySymbol}{item?.current_price?.toFixed(2)}</TableCell>
                  <TableCell align="right"><span style={{color: profit? "green" : "red", fontWeight:"bold"}}>{profit && '+'}{item?.price_change_percentage_24h?.toFixed(2)}%</span></TableCell>
                  <TableCell className={classes.tableBody} align="right">{item?.market_cap}M</TableCell>
                </TableRow>
                )
              })}
   
        </TableBody>
          </Table>
      </TableContainer>
    </div>
  )
}

export default TableContent
