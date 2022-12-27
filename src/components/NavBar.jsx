import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import { red } from "@mui/material/colors";
import '../assets/scss/fonts.scss';
import TableStore from '../stores/TableStore'
import SearchStore from '../stores/SearchStore'
import SearchComponent from "./SearchComponent";
import {Button} from 'antd'
import diamond from '../assets/diamond.svg';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center'
  },

  AppBarCustomize: {
    background : '#FFFFFF',
    boxShadow: "none",
  },

  logo: {
    flexGrow: "1",
    cursor: "pointer",
    width: "243px",
  },

  link: {
    textDecoration: "none",
    color: "#000000",
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    marginLeft: theme.spacing(5),
    paddingBottom: '0px',

    "&:hover": {
      color: "#3C67F7",
      boxSizing: 'borderBox',
      borderBottom: "1px solid white",
      textShadow: "0px 4px 10px rgba(5, 62, 255, 0.56)"
    },
  },

  buttonSignUp: {
    marginLeft: '20px'
  },

  logIn: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20px',
  },
  logInLink: {
    textDecoration: "none",
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '19px',
    textAlign: 'center',
    color: '#000000',
    marginLeft: '8px',
  }
}));

function Navbar() {
  const classes = useStyles();
  const storeTable = TableStore()
  const storeSearch = SearchStore()

  React.useEffect(() => {
    storeTable.fetchCoins()
    storeSearch.searchCoins()
  }, [])
  
  return (
      <AppBar position="static" className={classes.AppBarCustomize}>
      <CssBaseline />
    
      <Toolbar>
        <Typography className={classes.logo}>
          <div className="App">
            <img src={logo} alt="React Logo" />
          </div>
        </Typography>

        <div className={classes.navlinks}>
          <Link to="/cryptocurrencies" className={classes.link}>
            Cryptocurrencies
          </Link>
          <Link to="/exchanges" className={classes.link}>
            Exchanges
          </Link>
          <Link to="/nft" className={classes.link}>
            NFT
          </Link>
          <Link to="/CrypTown" className={classes.link}>
            CrypTown
          </Link>
          <Link to="/portfolio" className={classes.link}>
            Portfolio
          </Link>
          <Link to="/watchlist" className={classes.link}>
            Watchlist
          </Link>
          <Link to="/products" className={classes.link}>
            Products
          </Link>
          <Link to="/login">
            <div className={classes.logIn}>
              <img src={diamond}/>
              <a className={classes.logInLink}>Log In</a>
            </div>
          </Link>
          <Link>
            <Button type="primary" className={classes.buttonSignUp}>Sign up</Button>
          </Link>
          <Link>
            <SearchComponent valueQuery={storeSearch.query} eventChange={storeSearch.setQuery} />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
