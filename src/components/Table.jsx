import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactDOM from "react-dom";

import homeStore from '../stores/homeStore'

export default function Table() {
  const store = homeStore()
  
  React.useEffect(() => {
    store.fetchCoins()
  }, [])
  return (
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
  );
}
