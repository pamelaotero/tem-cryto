import axios from 'axios'
import create from 'zustand'
import debounce from '../helpers/debounce'

const TableStore = create((set) => ({
  coins: [],
  query: '',

  setQuery: (e) => {
    set({ query: e.target.value })
  },

  fetchCoins: async() => {
    let acm = 1
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd')
      const coins = res.data.map(coin => {
        return {
          marketCapRank: coin.market_cap_rank,
          buy: coin?.roi?.currency || null,
          id: acm++,
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

export default TableStore

// se existir ROI, coloca o toggle de BUY