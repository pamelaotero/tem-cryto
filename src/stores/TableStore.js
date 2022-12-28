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

    const res7d = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d',
    { 'Access-Control-Allow-Origin': '*'})
    
    const data7dPrice = res7d.data.map( d7=> {
      return {
        price7d: parseFloat(d7.price_change_percentage_7d_in_currency.toFixed(2))
      }
    }).slice(0,10)

    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd',
    {'Access-Control-Allow-Origin': '*'})

    console.log('res::', res)
    
    let coins = res.data.map(coin => {
      return {
        marketCapRank: coin.market_cap_rank,
        buy: coin?.roi?.currency ? 'Buy' : '',
        id: coin.market_cap_rank,
        name: coin.name,
        image: coin.image,
        currency: coin.symbol,
        current_price: '$' + parseFloat(coin.current_price.toFixed(2)),
        priceChange24h: parseFloat(coin.price_change_24h.toFixed(2)),
        marketCap: '$' + parseFloat(coin.market_cap.toFixed(2))
      }
    }).slice(0,10)

    console.log('coins normal::', coins)

    coins = coins.map(cont => {
      return {
        marketCapRank: cont.marketCapRank,
        id: cont.id,
        image: cont.image,
        name: cont.name,
        currency: cont.currency,
        buy: cont.buy,
        current_price: cont.current_price,
        priceChange24h: cont.priceChange24h,
        marketCap: cont.marketCap,
        price7d: data7dPrice[cont.id -1].price7d
      }
    }).slice(0,10)  

    console.log('coins::', coins)

    set({coins})
  }
}))

export default TableStore
