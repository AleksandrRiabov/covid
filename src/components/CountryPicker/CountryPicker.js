import styles from "./CountryPicker.module.css";
import {NativeSelect, FormControl} from "@material-ui/core";
import { useGloabalConext } from '../../context/globalContext';
import Loader from "../Loader/Loader";

const CountryPicker = () =>  {;
   const {countriesList, selectedCountry, setSelectedCountry} = useGloabalConext();
   
   return  !countriesList.length ? <Loader /> : (
         <FormControl className={styles.formControl}>
        <NativeSelect value={selectedCountry} onChange={(e) => setSelectedCountry(e)}>
           <option key="global" value="global">Global</option>
           {countriesList.map(country =>{
              return  <option key={country.name} value={country.iso3}>{country.name}</option>
           })}
        </NativeSelect>
     </FormControl>
      )
}

export default CountryPicker
