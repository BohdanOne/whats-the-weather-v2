import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/What's the Weather/i);
  expect(titleElement).toBeInTheDocument();
});
