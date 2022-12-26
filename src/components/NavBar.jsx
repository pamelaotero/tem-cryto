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
import homeStore from '../stores/homeStore'
import SearchComponent from "./SearchComponent";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
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
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#3C67F7",
      borderBottom: "1px solid white",
      textShadow: "0px 4px 10px rgba(5, 62, 255, 0.56)"
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const store = homeStore()
  
  React.useEffect(() => {
    store.fetchCoins()
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
          <SearchComponent valueQuery={store.query} eventChange={store.setQuery} />
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
