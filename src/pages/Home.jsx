import React from 'react'
import Navbar from '../components/NavBar'
import CriptoTable from '../components/CriptoTable'
import ListTopCripto from '../components/ListFavorite'

export default function Home() {
  
  return (
    <div>
      <Navbar/>
      <ListTopCripto/>
      <CriptoTable/>
    </div>
  )
}
