import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`

export const Label = styled.label`
  font-size: 2.5rem;
  font-family: var(--font);
  color: var(--white);
  margin-bottom: 0.5rem;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: var(--white);
  font-family: var(--font);
  border: none;
  color: var(--ghost);
  font-size: 2rem;
  padding: 0 0.5rem;
`
