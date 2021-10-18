import Image from 'next/image'

import * as S from './styles'
import { Pokemon } from 'model/Pokemon'
import TypeBadge from 'components/TypeBadge'

export type PokemonCardProps = {
  pokemon: Pokemon
}

const PokemonCard = ({
  pokemon: { name, img, type, num }
}: PokemonCardProps) => {
  return (
    <S.Card>
      <Image src={img} width={100} height={250} objectFit="scale-down" />
      <S.Number>#{num}</S.Number>
      <S.Name>{name}</S.Name>
      <S.TypeList>
        {type.map((pokemonType, index) => (
          <TypeBadge key={index} type={pokemonType}>
            {pokemonType}
          </TypeBadge>
        ))}
      </S.TypeList>
    </S.Card>
  )
}

export default PokemonCard
