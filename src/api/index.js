import axios from "axios";
const urlBase = "https://covid19.mathdro.id/api";

export const fetchData = async(country) => {
   const url = country === "global" ? urlBase : `${urlBase}/countries/${country}`;

   try{
      const {data: {confirmed, recovered, deaths,lastUpdate}} = await axios.get(url);
      return {confirmed, recovered, deaths, lastUpdate};
      
   } catch (error) {
      console.log(`Faild to Fetch: ${error.message}`);
   }
}

export const fetchDailyData = async() => {
   try{
      const {data} = await axios.get(`${urlBase}/daily`);
     const  modifiedData =  data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
     }))
     return modifiedData
   } catch (error) {
      console.log(`Faild to Fetch: ${error.message}`);
   }
}

export const fetchCountriesList = async() => {
   try{
      const {data:{countries}} = await axios.get(`${urlBase}/countries`);
      return countries;
   } catch (error) {
      console.log(`Faild to Fetch: ${error.message}`);
   }
}

