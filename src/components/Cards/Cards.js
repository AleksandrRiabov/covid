import styles from "./Cards.module.css";
import { useGloabalConext } from "../../context/globalContext";
import { Card, Typography, Grid, CardContent } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = () =>  {
   const {data: {confirmed, recovered, deaths, lastUpdate}} = useGloabalConext();

   if (!confirmed){
      return "Loading.."
   }
   const date = new Date(lastUpdate).toLocaleDateString();

   return (
      <div className={styles.container}>
         <Grid container spacing={3} justifyContent="center" >
             <Grid xs={12} md={3} className={cx(styles.infected, styles.card)} item component={Card}>
                <CardContent>
                   <Typography color="textSecondary" gutterBottom>Infected</Typography>
                   <Typography variant="h6"  gutterBottom>
                        <CountUp 
                        start={0}
                        end={confirmed.value}
                        duration={2}
                        separator=","/>
                   </Typography>
                   <Typography color="textSecondary" gutterBottom>{date}</Typography>
                   <Typography variant="body2"  gutterBottom>Number of active cases..</Typography>
                </CardContent>
             </Grid>
             <Grid xs={12} md={3} className={cx(styles.recovered, styles.card)} item component={Card}>
                <CardContent>
                   <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                   <Typography variant="h6"  gutterBottom>
                        <CountUp 
                           start={0}
                           end={recovered.value}
                           duration={2.1}
                           separator=","/>
                      </Typography>
                   <Typography color="textSecondary" gutterBottom>{date}</Typography>
                   <Typography variant="body2"  gutterBottom>Total of recovered cases..</Typography>
                </CardContent>
             </Grid>
             <Grid xs={12} md={3} className={cx(styles.deaths, styles.card)} item component={Card}>
                <CardContent>
                   <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                   <Typography variant="h6"  gutterBottom>
                        <CountUp 
                           start={0}
                           end={deaths.value}
                           duration={1.5}
                           separator=","/>
                      </Typography>
                   <Typography color="textSecondary" gutterBottom>{date}</Typography>
                   <Typography variant="body2"  gutterBottom>Total number of deaths..</Typography>
                </CardContent>
             </Grid>
         </Grid>
      </div>
   )
}

export default Cards
