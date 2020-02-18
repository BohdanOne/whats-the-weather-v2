import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import HomePage from '../../../../components/pages/home/HomePage';
import Location from '../../../../components/location/Location';

describe('<HomePage />', () => {
  let wrapped:any;

  beforeEach(() => (wrapped = shallow(<HomePage />)));

  it('renders title', () => {
    const { getByText } = render(<HomePage />);
    const titleElement = getByText(/What's the Weather/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders location box', () => {
    expect(wrapped.find(Location).length).toEqual(1);
  });

});
