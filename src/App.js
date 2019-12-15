import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MenuItem } from '@material-ui/core';
import Menu from './components/Menu';
import Trainings from './components/Trainings';


function App() {

  return (
    <div className="App">

        <AppBar position="static">
        <Toolbar>
        <Menu />
          <Typography variant="h6" >
          Personal trainer
          </Typography>
          
        </Toolbar> 
      </AppBar>
      <Customerlist />
    </div>
  );
}

export default App;
