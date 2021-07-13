import React, {useContext, useReducer, useEffect} from "react";
import globalReducer from "../reducer/globalReducer";
import { fetchData, fetchDailyData, fetchCountriesList,} from "../api";


const AppContext = React.createContext();
const initialSatate = {
      fetchedData: {},
      fetchedDailyData:[],
      fetchedCountriesList: [],
      selectedCountry: "global",
      fetchedCountryData: {},
}

const AppProvider = ({children}) => {
   const [state, dicpatch] = useReducer(globalReducer, initialSatate);
    
   useEffect(() => {
      const runFetch = async() => {
         const data = await fetchData("global");
         dicpatch({type: "SET DATA", payload: data});
      }
      runFetch();
   }, []);

   useEffect(() => {
      const runFetch = async() => {
         const data = await fetchDailyData();
         dicpatch({type: "SET DAILY DATA", payload: data});
      }
      runFetch();
   }, []);

   useEffect(() => {
      const runFetch = async() => {
         const data = await fetchCountriesList();
         dicpatch({type: "SET COUNTRIES LIST", payload: data});
      }
      runFetch();
   }, []);

   const setSelectedCountry = async(e) => {
      const countryName = e.target.value;
      dicpatch({type: "SET SELECTED COUNTRY", payload: countryName});

      const data = await fetchData(countryName);
      dicpatch({type: "SET DATA", payload: data});
   }
 
   return (
      <AppContext.Provider value={{
         data: state.fetchedData,
         dailyData: state.fetchedDailyData,
         countriesList: state.fetchedCountriesList,
         selectedCountry: state.selectedCountry,
         setSelectedCountry,
          }}>
         {children}
      </AppContext.Provider>
   )
}

const useGloabalConext = () => {
   return useContext(AppContext);
}

export {AppProvider, useGloabalConext}
