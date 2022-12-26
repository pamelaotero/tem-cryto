import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Table from '../components/Table'

export default function Home() {
  
  return (
    <div>
      <Navbar></Navbar>

      <Table></Table>
    </div>
  )
}
