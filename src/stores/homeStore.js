import axios from 'axios'
import create from 'zustand'

const homeStore = create((set) => ({

  coins: [],

  fetchCoins: async() => {
  
  const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd')
    const coins = res.data.map(coin => {
      return {
        marketCapRank: coin.market_cap_rank,
        buy: coin?.roi?.currency || null,
        id: coin.id,
        name:  coin.name,
        currency: coin.symbol,
        current_price: coin.current_price,
        priceChange24h: coin.price_change_24h,
        marketCap: coin.market_cap,
      }
    }).slice(0,10)

    set({coins})
    // lista as top criptomoedas
    console.log(coins)
  }
}))

export default homeStore

// se existir ROI, coloca o toggle de BUY