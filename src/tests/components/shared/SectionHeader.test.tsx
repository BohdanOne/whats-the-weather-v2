import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import SectionHeader from '../../../components/shared/SectionHeader';

describe('<SectionHeader />', () => {

  test('displays provided title', () => {
    const { getByText } = render(<SectionHeader title='test' />);
    expect(getByText('test')).toBeTruthy();
  });

  test('displays title and aditional titleSpan', () => {
    const header = shallow(<SectionHeader title='test' titleSpan='test-span' />);
    expect(header.text()).toContain('test');
    expect(header.text()).toContain('test-span');
  })
})