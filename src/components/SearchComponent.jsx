import React from 'react'
import Table from './CriptoTable'
import { useState } from "react";
import homeStore from '../stores/homeStore'
import { Link } from "react-router-dom";

export default function SearchComponent(props) {
  const store = homeStore()
  
  React.useEffect(() => {
    store.fetchCoins()
  }, [])

  return (
     <div>
      <Link>
        <div>
          <input type="text" value={props.valueQuery} onChange={props.eventChange} />
          <input type="submit"></input>
        </div>
      </Link>
    </div>
  );
}
