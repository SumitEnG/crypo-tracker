import { makeStyles } from '@material-ui/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/header/Header';
import CoinDetails from './components/table/CoinDetails';
import TableContent from './components/table/TableContent';
 
const useStyle = makeStyles(()=>
({
    app: {
      backgroundColor: "#515357",
      minHeight: "100vh",
        }
  })
);

function App() {

  const classes = useStyle()

  return (
    <div className={classes.app}>
      <BrowserRouter>
           <Header/>
           <Routes>
             <Route path='/' element={<>
             <Banner/>
             <TableContent/>
              </>}/>
            

           <Route path='/details' element={<CoinDetails/>}/>
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
