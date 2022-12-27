import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import zIndex from '@mui/material/styles/zIndex';
import SearchStore from '../stores/SearchStore';
import {useRef} from 'react';

const useStyles = makeStyles((theme) => ({
  sectionSearch: {
    background : 'red',
    position: 'absolute',
    zIndex: '99'
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

export default function SearchComponent(props) {
  const store = SearchStore()
  const classes = useStyles();
  
  React.useEffect(() => {
    store.searchCoins()
  }, [])

  const ref = useRef(null);

  return (
     <div>
      <Link>
        <input 
          ref={ref}
          type="text" 
          value={props.valueQuery}
          placeholder='Buscar'
          onChange={props.eventChange}
        />
      </Link>

    
      <div className={classes.sectionSearch}>
        { props.valueQuery!= 0 && (
        <div>
          {store.coins.map(coin => {
            return (
              <div key={coin.id}> 
                <Link to={`/${coin.name}`}>
                  {coin.name}
                </Link>
              </div>
            )
          })}
        </div>
        )}
      </div>
    </div>
  );
}
