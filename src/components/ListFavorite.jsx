import React from 'react'
import { makeStyles } from "@material-ui/core";
import { createRoot } from 'react-dom/client';
import { Switch } from 'antd';
import { Typography } from 'antd'
const { Title } = Typography;

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
    <div>
      <div className={classes.sectionSubheader}>
      <h3 className={classes.h3}>Preço das criptomoedas por valor de mercado</h3>
      
      <div className={classes.checkComponent}>
        <p style={{color: '#A7B1C2', fontSize: '16px'}}>
          Highlights<Switch size="small" defaultChecked style={{marginLeft: '10px'}} />
        </p>
      </div>
    </div>
    <div>
      <Title style={{fontSize:'16px', marginLeft: '36px'}}>
        Favoritos
      </Title>
    </div>
    </div>
  )
}
