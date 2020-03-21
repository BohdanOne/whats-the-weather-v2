import React from 'react';
import { render } from '@testing-library/react';
import WarningDisplay from '../../../components/shared/WarningDisplay';

describe('<WarningDisplay />', () => {
  test('displays provided warning', () => {
    const { getByText } = render(<WarningDisplay warning='test' />);
    expect(getByText('test')).toBeTruthy();
  });
});
