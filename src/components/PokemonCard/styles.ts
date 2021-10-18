import styled from 'styled-components'

export const Card = styled.div`
  width: 300px;
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
  img {
    background: var(--steel);
    border-radius: 8px;
  }
`

export const Number = styled.span`
  width: 180px;
  color: var(--ghost);
  margin-top: -10px;
  padding: 5px;
  font-size: 1.2rem;
  font-family: var(--font);
  z-index: 10;
  background-color: var(--white);
  border-top-right-radius: 8px;
`

export const Name = styled.h2`
  font-size: 3rem;
  font-family: var(--font);
  color: var(--dark);
  margin-top: 5px;
`

export const TypeList = styled.div`
  width: 100%;
  display: flex;
  margin-top: 8px;
`
