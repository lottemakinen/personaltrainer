import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {BrowserRouter, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <BrowserRouter>
        <div>
        <MenuItem onClick={handleClose} component={Link} to="/customers">Customers</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/trainings">Trainings</MenuItem>
        </div>
        </BrowserRouter>
      </Menu>
    </div>
  );
}