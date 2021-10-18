import { PokemonApiResponse } from 'model/Pokemon'
import { GetServerSideProps } from 'next'
import pokemonApi from 'services/pokemon-api'
import HomeTempalte, { HomeTempalteProps } from 'template/Home'

export default function Home({ pokemons }: HomeTempalteProps) {
  return <HomeTempalte pokemons={pokemons} />
}

export const getServerSideProps: GetServerSideProps<HomeTempalteProps> =
  async () => {
    try {
      const { data } = await pokemonApi.get<PokemonApiResponse>('/pokedex.json')

      return {
        props: {
          pokemons: data.pokemon
        }
      }
    } catch (error) {
      console.error(error)

      return {
        props: {
          pokemons: []
        }
      }
    }
  }
