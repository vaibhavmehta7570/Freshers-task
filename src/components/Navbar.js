import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button data-test="home-button" color='inherit' to="/" component={Link}>
            Home
        </Button>
          <Button data-test="users-button" color='inherit' to="/users" component={Link}>
            Users
        </Button>
          <Button data-test="albums-button" color='inherit' to="/albums" component={Link}>
            Albums
        </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
