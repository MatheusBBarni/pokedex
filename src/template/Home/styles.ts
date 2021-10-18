import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

const marginModifier = css`
  margin: 0 30px;

  @media (max-width: 900px) {
    margin: 0 5px;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  font-family: var(--font);
  color: var(--ghost);
  padding-left: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: var(--white);
  ${marginModifier};
`

export const Filter = styled.div`
  width: 100%;
  background-color: var(--ghost);
  height: 140px;
  display: flex;
  align-items: flex-end;
  padding: 0 30px;
  padding-bottom: 15px;
  display: flex;
  .input-wrapper {
    width: 210px;
  }
  button {
    margin-left: 1rem;
  }
`

export const PokemonList = styled.div`
  ${marginModifier};
  padding: 0 15px;
  padding-top: 30px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  gap: 8px;
  background-color: var(--white);
`
