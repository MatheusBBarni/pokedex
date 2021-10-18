import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render a button', () => {
    render(<Button>Jest</Button>)

    expect(screen.getByRole('button', { name: /Jest/i })).toBeInTheDocument()
  })
  it("should render a button with children 'Testing with jest'", () => {
    render(<Button>Testing with jest</Button>)

    expect(
      screen.getByRole('button', { name: /Testing with jest/i })
    ).toBeInTheDocument()
  })
})
