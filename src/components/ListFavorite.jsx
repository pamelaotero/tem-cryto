import React from 'react'
import { makeStyles } from "@material-ui/core";
import { createRoot } from 'react-dom/client';
import { Switch } from 'antd';

const useStyles = makeStyles((theme) => ({
  sectionSubheader: {
    background: '#F8FAFD',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'spaceEvenly;;'
  },

  h3: {
    display: 'flex',
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '34px',
    paddingLeft: '36px',
    paddingBottom: '40px',
    paddingTop: '40px'
  },

  checkComponent: {
    marginLeft: 'calc(100vh - 180px)'
  }
}));

export default function ListFavorite() {
  const classes = useStyles();
  return (
    <div className={classes.sectionSubheader}>
      <h3 className={classes.h3}>Preço das criptomoedas por valor de mercado</h3>
      
      <div className={classes.checkComponent}>
        <p style={{color: '#A7B1C2', fontSize: '16  px'}}>
          Highlights<Switch size="small" defaultChecked style={{marginLeft: '10px'}} />
        </p>
      </div>
    </div>
  )
}
