import React from 'react';
import { render } from '@testing-library/react';
import Spinner from '../../../components/utils/Spinner';

test('renders passed in message', () => {
  const { getByText } = render(<Spinner message="Loading..." />);
  const messageElement = getByText(/Loading/i);
  expect(messageElement).toBeInTheDocument();
});
