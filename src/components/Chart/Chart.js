import { useGloabalConext } from "../../context/globalContext";
import {Line, Bar} from "react-chartjs-2";

import styles from "./Chart.module.css";

const Cards = () =>  {
   const {dailyData, selectedCountry, data:{confirmed, recovered, deaths}} = useGloabalConext();

   const LineChart = (
      dailyData.length? 
       <Line 
       data={{
          labels: dailyData.map(({date}) => date), 
          datasets: [{
             data: dailyData.map(({confirmed}) => confirmed),
             label: "Infected",
             borderColor: "#3333ff",
             fill: true
          },{
             data:dailyData.map(({deaths}) => deaths), 
             label: "Deaths",
             borderColor: "red",
             backgroundColor: "rgba(255,0,0,0.5)",
             fill: true
          }]
       }}
       /> : null
   );


   const BarChart = confirmed ? (
      <Bar
      data={{
         labels: ["Infected", "Recovered", "Deaths"],
         datasets: [{
            label: "People",
            backgroundColor: ["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],
            data: [confirmed.value, recovered.value, deaths.value],
         }], 
      }}
      options={{
         legent: {display: false},
         title: {display: true, text: `Current situation in ${selectedCountry}`}
      }}
      />
   ): null;

   
   return (
      <div className={styles.container}>
         {selectedCountry === "global" ? LineChart: BarChart }
      </div>
   )
}

export default Cards

