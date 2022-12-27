import axios from 'axios'
import create from 'zustand'
import debounce from '../helpers/debounce'

const SearchStore = create((set) => ({
  coins: [],
  query: '',

  setQuery: (e) => {
    set({ query: e.target.value })
    SearchStore.getState().searchCoins()
  },

  searchCoins: debounce( async () => {
    const { query } = SearchStore.getState()
    
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
    
  }, 500)
}))

export default SearchStore

// se existir ROI, coloca o toggle de BUY