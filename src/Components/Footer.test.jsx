import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders a button', () => {
  const { getByText } = render(<Footer reactions={{"ok":"1"}}/>);
  const buttonElement = getByText(/🆗/i);
  expect(buttonElement).toBeInTheDocument();
});
