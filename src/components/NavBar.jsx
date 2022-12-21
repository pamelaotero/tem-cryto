import React from "react";
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

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    border: "2px solid red"
  },

  AppBarCustomize: {
    background : '#FFFFFF',
    boxShadow: "none",
  },

  logo: {
    flexGrow: "1",
    cursor: "pointer",
    width: "243px",
    border: "border: 2px solid red;"
  },

  link: {
    textDecoration: "none",
    color: "#000000",
    fontSize: "16px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "#3C67F7",
      borderBottom: "1px solid white",
      textShadow: "0px 4px 10px rgba(5, 62, 255, 0.56)"
    },
  },
}));

function Navbar() {
  const classes = useStyles();

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
          <Link to="/" className={classes.link}>
            Cryptocurrencies
          </Link>
          <Link to="/about" className={classes.link}>
            Exchanges
          </Link>
          <Link to="/contact" className={classes.link}>
            NFT
          </Link>
          <Link to="/faq" className={classes.link}>
            CrypTown
          </Link>
          <Link to="/faq" className={classes.link}>
            Portfolio
          </Link>
          <Link to="/faq" className={classes.link}>
            Watchlist
          </Link>
          <Link to="/faq" className={classes.link}>
            Products
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
