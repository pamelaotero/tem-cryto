import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
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
    title: () => {
      return (
        <Title style={{fontSize:'16px'}}>
          #
        </Title>
      );
    },
    dataIndex:'id',
    render: (_, record) => (
      <Space size="middle">
        <Title strong style={{ fontSize: '16px', fontWeight: 'none'}}>{record.id}</Title>
      </Space>
    ),
  },
  {
    title: () => {
      return (
        <Title style={{fontSize:'16px'}}>
          Nome
        </Title>
      );
    },
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
    title: () => {
      return (
        <Title style={{fontSize:'16px'}}>
          Preço
        </Title>
      );
    },
    dataIndex:'current_price',
    render: (_, record) => (
      <Space size="middle">
        <Title strong style={{ fontSize: '16px'}}>{record.current_price}</Title>
      </Space>
    ),
  },
  {
    title: () => {
      return (
        <Title style={{fontSize:'16px'}}>
          24h %
        </Title>
      );
    },
    
    dataIndex:'priceChange24h',
    render: (_, record) => (
      <Space size="middle">
        { record.priceChange24h < 0
          ? <Space>
              <CaretDownOutlined style={{color: '#EA3943'}} />
              <Title strong style={{ fontSize: '16px', color: '#EA3943'}}>
                {record.priceChange24h*(-1)} %
              </Title>
            </Space>

          : <Space>
              <CaretUpOutlined style={{color: '#16C784'}} />
              <Title strong style={{ fontSize: '16px', color: '#16C784'}}>
                {record.priceChange24h} %
              </Title>
            </Space>
        }
      </Space>
    ),
  },
  {
    title: () => {
      return (
        <Title style={{fontSize:'16px'}}>
          7d %
        </Title>
      );
    },
    dataIndex:'price7d',
    render: (_, record) => (
      <Space size="middle">
        { record.price7d < 0
          ? <Space>
              <CaretDownOutlined style={{color: '#EA3943'}} />
              <Title strong style={{ fontSize: '16px', color: '#EA3943'}}>
                {record.price7d*(-1)} %
              </Title>
            </Space>

          : <Space>
              <CaretUpOutlined style={{color: '#16C784'}} />
              <Title strong style={{ fontSize: '16px', color: '#16C784'}}>
                {record.price7d} %
              </Title>
            </Space>
        }
      </Space>
    ),
  },
  {
    title: () => {
      return (
        <Title style={{fontSize:'16px'}}>
          Valor de Mercado
        </Title>
      );
    },
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
