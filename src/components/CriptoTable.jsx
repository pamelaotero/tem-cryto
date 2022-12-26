import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactDOM from "react-dom";
import homeStore from '../stores/homeStore'
import {Table} from 'antd'

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
    {/* {store.coins} */}
    <div>
      <Table columns={[
      {
        title:"",
        dataIndex:'star'
      },
      {
        title:"#",
        dataIndex:'hastag'
      },
      {
        title:"Nome",
        dataIndex:'name'
      },
      {
        title:"Preço",
        dataIndex:'price'
      },
      {
        title:"24h %",
        dataIndex:'24h'
      },
      {
        title:"7d %",
        dataIndex:'7d'
      },
      {
        title:"Valor de Mercado",
        dataIndex:'marketValue'
      }
      ]}>

      </Table>
    </div>
    </div>
  );
}
