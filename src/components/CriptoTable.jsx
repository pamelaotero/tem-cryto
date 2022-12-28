import React from 'react'
import { Link } from "react-router-dom"
import { useState } from "react"
import ReactDOM from "react-dom"
import homeStore from '../stores/TableStore'
import { Space, Table, Image, Typography } from 'antd'
const { Title } = Typography;

const columns = [
  {
    title:"",
    dataIndex:'star'
  },
  {
    title:"#",
    dataIndex:'id',
    render: (_, record) => (
      <Space size="middle">
        <Title strong style={{ fontSize: '16px', fontWeight: 'none'}}>{record.id}</Title>
      </Space>
    ),
  },
  {
    title:"Nome",
    dataIndex:'name',
    render: (_, record) => (
      <Space size="middle">
        <Image
          width={24}
          src={record.image}
        />
        <Title strong style={{ fontSize: '16px'}}>{record.name}</Title>
        <Title type="secondary" style={{ fontSize: '16px', fontWeight: 'none'}}>{record.currency.toUpperCase()}</Title>
        { record.buy!= 0 && (
          <Title
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '12px',
              color: '#3C67F7',
              padding: '8px 10px',
              background: '#E7F0FF',
              boxShadow: '5px 15px 30px rgba(126, 126, 177, 0.1)',
              borderRadius: '8px'
            }}
          >
            {record.buy}
          </Title>
        )}
      </Space>
    ),
  },
  {
    title:"Preço",
    dataIndex:'current_price',
    render: (_, record) => (
      <Space size="middle">
        <Title strong style={{ fontSize: '16px'}}>{record.current_price}</Title>
      </Space>
    ),
  },
  {
    title:"24h %",
    dataIndex:'priceChange24h',
    render: (_, record) => (
      <Space size="middle">
        <Title strong style={{ fontSize: '16px'}}>{record.priceChange24h}</Title>
      </Space>
    ),
  },
  {
    title:"7d %",
    dataIndex:'price7d',
    render: (_, record) => (
      <Space size="middle">
        <Title strong style={{ fontSize: '16px'}}>{record.price7d}</Title>
      </Space>
    ),
  },
  {
    title:"Valor de Mercado",
    dataIndex:'marketCap',
    render: (_, record) => (
      <Space size="middle">
        <Title strong style={{ fontSize: '16px'}}>{record.marketCap}</Title>
      </Space>
    ),
  }
]

export default function CriptoTable() {
  const store = homeStore()
  
  React.useEffect(() => {
    store.fetchCoins()
  }, [])

  return (
    <div style={{background: '#F8FAFD'}}>
      <Table
        columns={columns}
        dataSource={(store.coins)}
      />
    </div>
  );
}
