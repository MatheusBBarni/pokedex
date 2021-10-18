import * as S from './styles'

export type TextFieldProps = {
  label: string
  value: string
  onValueChange: (value: string) => void
}

const TextField = ({ label, value, onValueChange }: TextFieldProps) => {
  return (
    <S.Wrapper role="textfield">
      <S.Label htmlFor={label}>{label}</S.Label>
      <S.Input
        id={label}
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
      />
    </S.Wrapper>
  )
}

export default TextField
