import React from 'react';
import { render } from '@testing-library/react';
import Spinner from '../../../components/shared/Spinner';

describe('<Spinner />', () => {
  test('displays provided message', () => {
    const { getByText } = render(<Spinner message='test' />);
    expect(getByText('test')).toBeTruthy();
  });
});
