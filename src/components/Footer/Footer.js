import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
       WebDevApplications@gmail.com <br/>
      <Link color="primary" href="https://github.com/AleksandrRiabov/covid.git">
        GitHub repository
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter({children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
        {children}
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <Typography variant="body1">Tehnologies: </Typography>
           <ul>
              <li><Typography variant="body1">Tehnologies:</Typography></li>
              <li><Typography variant="body1">REACT JS </Typography></li>
              <li><Typography variant="body1">@material-ui</Typography></li>
              <li><Typography variant="body1">charts.js</Typography></li>
              <li><Typography variant="body1">axios</Typography></li>
              <li><Typography variant="body1">classnames</Typography></li>
              <li><Typography variant="body1">react-countup</Typography></li>
           </ul>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}