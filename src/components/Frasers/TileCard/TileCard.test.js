import React from 'react';
import { shallow } from 'enzyme';
import TileCard from './TileCard';

describe('<TileCard />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TileCard />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
