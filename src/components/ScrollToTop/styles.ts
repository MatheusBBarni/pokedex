import styled from 'styled-components'

export const Wrapper = styled.button<{ show: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: var(--dark);
  border: 1px solid var(--dark);
  right: 10px;
  bottom: 10px;
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
`
