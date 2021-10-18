import { render, screen } from '@testing-library/react'

import TextField from '.'
import mock from './mock'

describe('<TextField />', () => {
  it('should render', () => {
    render(<TextField {...mock} />)

    expect(screen.getByRole('textfield')).toBeInTheDocument()
  })
  it("should render with a label 'Jest'", () => {
    render(<TextField {...mock} />)

    expect(screen.getByText('Jest')).toBeInTheDocument()
  })
})
