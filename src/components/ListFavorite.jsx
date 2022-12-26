import React from 'react'
import { makeStyles } from "@material-ui/core";
import { createRoot } from 'react-dom/client';
// import Demo from './demo';

const useStyles = makeStyles((theme) => ({
  h3: {
    display: 'flex',
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '34px'
  },
}));

export default function ListFavorite() {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.h3}>Preço das criptomoedas por valor de mercado</h3>
    
      {/* TODO: toggle de check box */}
      {/* createRoot(document.getElementById('container')).render(<Demo />); */}
    </div>
  )
}


// Listar as tops criptomoedas.