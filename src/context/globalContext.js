import React, {useContext, useReducer, useEffect} from "react";
import globalReducer from "../reducer/globalReducer";
import { fetchData, fetchDailyData } from "../api";


const AppContext = React.createContext();
const initialSatate = {
      fetchedData: {},
      fetchedDailyData:[]
}

const AppProvider = ({children}) => {
   const [state, dicpatch] = useReducer(globalReducer, initialSatate);
    
   useEffect(() => {
      const runFetch = async() => {
         const data = await fetchData();
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

 
   return (
      <AppContext.Provider value={{data: state.fetchedData, dailyData: state.fetchedDailyData}}>
         {children}
      </AppContext.Provider>
   )
}

const useGloabalConext = () => {
   return useContext(AppContext);
}

export {AppProvider, useGloabalConext}
