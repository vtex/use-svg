import React from 'react';
import Icon from '../Icon';
import { shallow } from 'enzyme';

describe('Svg', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Icon id={'example'} size={300} />
    );
  });

  it('should render its children', () => {
    // Act
    const svg = wrapper.find('svg');
    const use =  wrapper.find('use');


    // Assert
    expect(svg).toBeTruthy();
    expect(use).toBeTruthy();
  });
    
})