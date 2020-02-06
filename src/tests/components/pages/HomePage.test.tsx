import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../../../components/pages/HomePage';

test('renders title', () => {
  const { getByText } = render(<HomePage />);
  const titleElement = getByText(/What's the Weather/i);
  expect(titleElement).toBeInTheDocument();
});
