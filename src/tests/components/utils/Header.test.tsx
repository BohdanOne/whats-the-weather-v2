import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../../components/shared/Header';

test('renders passed in title', () => {
  const { getByText } = render(<Header title="What's the Weather"/>);
  const titleElement = getByText(/What's the Weather/i);
  expect(titleElement).toBeInTheDocument();
});
