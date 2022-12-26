import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactDOM from "react-dom";
import homeStore from '../stores/homeStore'
import {Table} from 'antd'

const columns = [
  {
    title:"",
    dataIndex:'star'
  },
  {
    title:"#",
    dataIndex:'id'
  },
  {
    title:"Nome",
    dataIndex:'name'
  },
  {
    title:"Preço",
    dataIndex:'current_price'
  },
  {
    title:"24h %",
    dataIndex:'priceChange24h'
  },
  {
    title:"7d %",
    dataIndex:'7d'
  },
  {
    title:"Valor de Mercado",
    dataIndex:'marketCap'
  }
]

export default function CriptoTable() {
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
    <div>
      <Table
        columns={columns}
        dataSource={(store.coins)}
      />
    </div>
    </div>
  );
}
