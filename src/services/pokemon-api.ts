import axios from 'axios'

const pokemonApi = axios.create({
  baseURL: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master'
})

export default pokemonApi
