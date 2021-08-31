import React from 'react';
import { shallow } from 'enzyme';
import HeroCarousel from './HeroCarousel';

describe('<HeroCarousel />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<HeroCarousel />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
