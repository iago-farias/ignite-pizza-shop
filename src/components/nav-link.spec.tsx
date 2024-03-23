import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/orders">Pedidos</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
        },
      },
    )

    expect(wrapper.getByText('Início').dataset.current).toEqual('true')
    expect(wrapper.getByText('Pedidos').dataset.current).toEqual('false')
  })
})
