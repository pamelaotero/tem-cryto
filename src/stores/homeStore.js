import axios from 'axios'
import create from 'zustand'
import debounce from '../helpers/debounce'

const homeStore = create((set) => ({
  coins: [],
  query: '',

  setQuery: (e) => {
    set({ query: e.target.value })
    homeStore.getState().searchCoins()
  },

  searchCoins: debounce( async () => {
    const { query } = homeStore.getState()
    
    if (query.length > 2) {
      const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)

      const coins = res.data.coins.map(coin => {
        return {
          name:coin.name,
          image: coin.large,
          id: coin.id
        }
      })

      set({coins})
    } else { 
      
    }
    
  }, 500),

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

export default homeStore

// se existir ROI, coloca o toggle de BUY