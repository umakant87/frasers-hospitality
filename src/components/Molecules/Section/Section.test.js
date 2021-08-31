import React from 'react';
import { shallow } from 'enzyme';
import Section from './Section';

describe('<Section />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Section />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
