import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Customerlist from './components/Customerlist';
import Trainings from './components/Trainings';
import Calendar from './components/Calendar';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar> 
          <Typography variant="h6">
            Personal trainer
          </Typography>
        </Toolbar>
        </AppBar>
        <BrowserRouter>
        <div>
          <Link to="/customers">Customers</Link>{' '}
          <Link to="/trainings">Trainings</Link>{' '}
          <Link to="/calendar">Calendar</Link>
        <Switch>
            <Route exact path="/customers" component={Customerlist} />
            <Route path="/trainings" component={Trainings} />
            <Route path="/calendar" component={Calendar} />
          </Switch>
          </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
