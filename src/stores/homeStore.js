import axios from 'axios'
import create from 'zustand'

const homeStore = create((set) => ({

  coins: [],

  fetchCoins: async() => {
  
  const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd')
    const coins = res.data.map(coin => {
      return { 
        id:  coin.id
      }
    })

    set({coins})
    // lista as top criptomoedas
    console.log(coins.slice(0,10))
  }
}))

export default homeStore