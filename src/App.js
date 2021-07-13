import {Cards, Chart, CountryPicker, Footer, Loader}from "./components"
import styles from "./App.module.css"
import covid from "./images/covid.png";
import { useGloabalConext } from "./context/globalContext";


const App = () => {
const {data} = useGloabalConext();

if(!data.confirmed){
  return ( 
    <div className={styles.container}>
      <Loader />
    </div>
    )
}
  return (
    <Footer>
         <div className={styles.container}>
          <div  className={styles.titleContainer}>
              <h1>COVID-19 </h1>
              <img className={styles.covid} src={covid} alt="Covid"/>
          </div>
          <Cards />
          <CountryPicker /> 
          <Chart />
      </div>
    </Footer>
  );
}

export default App;
