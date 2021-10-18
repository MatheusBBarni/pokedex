import { useState } from 'react'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'

import * as S from './styles'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { Pokemon } from 'model/Pokemon'
import PokemonCard from 'components/PokemonCard'
import ScrollToTop from 'components/ScrollToTop'

export type HomeTempalteProps = {
  pokemons: Pokemon[]
}

const HomeTempalte = ({ pokemons }: HomeTempalteProps) => {
  const [pokemonNameOrNumber, setPokemonNameOrNumber] = useState<string>('')

  return (
    <S.Container>
      <S.Title>Pokédex</S.Title>
      <S.Filter>
        <div className="input-wrapper">
          <TextField
            label="Name or Number"
            value={pokemonNameOrNumber}
            onValueChange={(value) => setPokemonNameOrNumber(value)}
          />
        </div>
        <Button>
          <SearchIcon size={25} color="var(--white)" />
        </Button>
      </S.Filter>
      <S.PokemonList>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </S.PokemonList>
      <ScrollToTop />
    </S.Container>
  )
}

export default HomeTempalte
