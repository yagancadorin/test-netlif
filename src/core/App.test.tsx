import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders Oi link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Oi/i)
  expect(linkElement).toBeInTheDocument()
})
