import { render, screen } from '@testing-library/react'

import PokemonCard from '.'
import mock from './mock'

describe('PokemonCard />', () => {
  it('should render a card', () => {
    render(<PokemonCard pokemon={mock} />)

    expect(screen.getByRole('card')).toBeInTheDocument()
  })
  it("should render a card with title 'Bulbasaur'", () => {
    render(<PokemonCard pokemon={mock} />)

    expect(
      screen.getByRole('heading', { name: /Bulbasaur/i })
    ).toBeInTheDocument()
  })
  it('should render two badges', () => {
    render(<PokemonCard pokemon={mock} />)
    const badges = screen.getAllByRole('badge')

    expect(badges.length).toBe(2)
  })
})
