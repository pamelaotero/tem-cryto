import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import zIndex from '@mui/material/styles/zIndex';
import SearchStore from '../stores/SearchStore';
import {useRef} from 'react';
import { padding } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  sectionSearch: {
    background : '#F6F9FB',
    position: 'absolute',
    zIndex: '99',
    marginLeft: '12px',
    boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.21)',
    borderRadius: '8px',
    paddingRight: '10px'
  },

  inputStyle: {
    width: '150px',
    height: '33px',
    background: '#EFF2F5',
    borderRadius: '8px',
    border: 'none',
    color: '#A7B1C2',
    padding: '0px 10px',
    marginLeft: '12px',
    fontWeight: '600',
    outlineColor: '#4096ff'
  },

  link: {
    textDecoration: "none",
    paddinTop: '10px',
    color: "#67686A",
    fontSize: "12px",
    fontWeight: 'none',
    paddingLeft: '10px',
    fontFamily: "'Inter', sans-serif",
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
          className={classes.inputStyle}
          ref={ref}
          type="search" 
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
                <Link to={`/${coin.name}`} className={classes.link}>
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
