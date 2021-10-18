import { render, screen } from '@testing-library/react'

import HomeTemplate from '.'
import mock from './mock'

describe('<HomeTemplate />', () => {
  it('should render', () => {
    render(<HomeTemplate pokemons={mock} />)

    expect(
      screen.getByRole('heading', { name: /pokédex/i })
    ).toBeInTheDocument()
  })
  it('should render two cards', () => {
    render(<HomeTemplate pokemons={mock} />)

    const cards = screen.getAllByRole('card')

    expect(cards.length).toBe(2)
  })
})
