import React from 'react';
import Use from '../Use';
import { shallow } from 'enzyme';

describe('Use', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <Use id="id" x="20" y="50" /> );
  });

  it('should render its children', () => {
    // Act
    const result = wrapper.find('use');
        
    // Assert
    expect(result).toHaveLength(1);
  });

  it('should pass down the data in the correct structure', () => {
    // Act
    const result = wrapper.find('use').props();
    
    // Assert
    expect(result.href).toBeTruthy();
    expect(result.xlinkHref).toBeTruthy();
    expect(result.x).toBeTruthy();
    expect(result.y).toBeTruthy();
  });
    
})