import React from 'react'
import homeStore from '../stores/homeStore'
import { Link } from 'react-router-dom'
import Navbar from '../components/NavBar'
// import Header from '../components/Header'

export default function Home() {
  const store = homeStore()

  React.useEffect(() => {
    store.fetchCoins()
  }, [])

  return (
    <div>
      <Navbar></Navbar>

      {/* Tabela aqui em baixo */}
      <input type="text" value={store.query} onChange={store.setQuery} />

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
  )
}
// aqui lista dados de uma moeda especifica
