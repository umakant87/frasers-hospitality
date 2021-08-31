import React from 'react';
import { shallow } from 'enzyme';
import Picture from './Picture';

describe('<Picture />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Picture />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
