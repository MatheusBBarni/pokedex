import { render, screen } from '@testing-library/react'

import TypeBadge from '.'
import mock from './mock'

describe('<TypeBadge />', () => {
  it('should render', () => {
    render(<TypeBadge type={mock}>{mock}</TypeBadge>)

    expect(screen.getByText(mock)).toBeInTheDocument()
  })
  it("should render with background-color 'var(--bug)'", () => {
    render(<TypeBadge type={mock}>{mock}</TypeBadge>)

    expect(screen.getByText(mock)).toHaveStyle({
      'background-color': 'var(--bug)'
    })
  })
})
