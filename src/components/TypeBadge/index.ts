import styled, { css } from 'styled-components'

import { PokemonType } from 'model/Pokemon'

export type TypeBadgeProps = {
  type: PokemonType
}

const typeBadgeModifier = {
  Fire: css`
    color: var(--white);
    background-color: var(--fire);
  `,
  Ice: css`
    color: var(--dark);
    background-color: var(--ice);
  `,
  Flying: css`
    color: var(--dark);
    background-color: var(--flying);
  `,
  Psychic: css`
    color: var(--white);
    background-color: var(--psychic);
  `,
  Water: css`
    color: var(--white);
    background-color: var(--water);
  `,
  Ground: css`
    color: var(--white);
    background-color: var(--ground);
  `,
  Rock: css`
    color: var(--white);
    background-color: var(--rock);
  `,
  Poison: css`
    color: var(--white);
    background-color: var(--poison);
  `,
  Grass: css`
    color: var(--dark);
    background-color: var(--grass);
  `,
  Electric: css`
    color: var(--dark);
    background-color: var(--electric);
  `,
  Bug: css`
    color: var(--dark);
    background-color: var(--bug);
  `,
  Ghost: css`
    color: var(--white);
    background-color: var(--ghost);
  `,
  Dark: css`
    color: var(--white);
    background-color: var(--dark);
  `,
  Dragon: css`
    color: var(--white);
    background-color: var(--dragon);
  `,
  Fairy: css`
    color: var(--dark);
    background-color: var(--fairy);
  `,
  Steel: css`
    color: var(--dark);
    background-color: var(--steel);
  `,
  Fighting: css`
    color: var(--dark);
    background-color: var(--fighting);
  `,
  Normal: css`
    color: var(--dark);
    background-color: var(--normal);
  `
}

const TypeBadge = styled.div<TypeBadgeProps>`
  ${({ type }) => css`
    width: 90px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3px;
    font-family: var(--font);
    font-size: 1.5rem;
    border-radius: 3px;

    ${typeBadgeModifier[type]}
  `}
`

export default TypeBadge
