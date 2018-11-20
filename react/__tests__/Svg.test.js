import React from 'react';
import Svg from '../Svg';
import { shallow } from 'enzyme';

describe('Svg', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Svg width="500" height="500" >
        <rect width="50" height="50" style="fill:pink"></rect>
        <circle cx="50" cy="50" r="40" fill="pink" />
        <circle cx="50" cy="50" r="40" fill="blue" />
        <circle cx="50" cy="50" r="40" fill="purple" />
      </Svg>
    );
  });

  it('should render its children', () => {
    // Act
    const svg = wrapper.find('svg');
    const rect = wrapper.find('rect');
    const circle = wrapper.find('circle');

    // Assert
    expect(svg).toHaveLength(1);
    expect(rect).toHaveLength(1);
    expect(circle).toHaveLength(3);
  });

  it('should pass down the data in the correct structure', () => {
    // Act
    const svg = wrapper.find('svg').props();
    
    // Assert
    expect(svg.xmlns).toBeTruthy();
    expect(svg.xmlnsXlink).toBeTruthy();
    expect(svg.width).toBeTruthy();
    expect(svg.height).toBeTruthy();
  });
    
})