import {Cards, Chart, CountryPicker }from "./components"
import styles from "./App.module.css"
import {AppProvider} from "./context/globalContext";


const App = () => {
  return (
    <AppProvider>
      <div className={styles.container}>
          <Cards />
          <CountryPicker /> 
          <Chart />
      </div>
    </AppProvider>
  );
}

export default App;
