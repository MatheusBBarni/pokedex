import { useState } from 'react'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'

import * as S from './styles'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { Pokemon } from 'model/Pokemon'
import PokemonCard from 'components/PokemonCard'
import ScrollToTop from 'components/ScrollToTop'
import sanitizeString from 'util/sanitize-string'

export type HomeTemplateProps = {
  pokemons: Pokemon[]
}

const HomeTemplate = ({ pokemons }: HomeTemplateProps) => {
  const [pokemonNameOrNumber, setPokemonNameOrNumber] = useState<string>('')
  const [filterNameOrNumber, setFilterNameOrNumber] = useState<string>('')

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
        <Button onClick={() => setFilterNameOrNumber(pokemonNameOrNumber)}>
          <SearchIcon size={25} color="var(--white)" />
        </Button>
      </S.Filter>
      <S.PokemonList>
        {pokemons
          .filter((item) => {
            if (!filterNameOrNumber || filterNameOrNumber === '') {
              return item
            }
            const sanitizedFilter = sanitizeString(filterNameOrNumber)
            if (
              sanitizeString(item.name).includes(sanitizedFilter) ||
              `#${sanitizeString(item.num)}`.includes(sanitizedFilter)
            ) {
              return item
            }
          })
          .map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </S.PokemonList>
      <ScrollToTop />
    </S.Container>
  )
}

export default HomeTemplate
