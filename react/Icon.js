import React from 'react'
import { bool, string, number } from 'prop-types'
import Use from './Use'
import Svg from './Svg'

const Icon = ({ id, isActive, size, viewBox, activeClassName, muttedClassName, ...props }) => (  
  <Svg
    fill='none'
    width={size}
    height={size}
    viewBox={viewBox}
    className={isActive ? activeClassName : muttedClassName}
    { ...props }
  >
    <Use id={id} />
  </Svg>
)

Icon.defaultProps = {
  isActive: true,
  size: '16',
  viewBox: '0 0 16 16',
  activeClassName: 'mid-gray',
  muttedClassName: 'light-gray',
}

Icon.propTypes = {
  id: string.isRequired,
  isActive: bool,
  size: number,
  viewBox: string,
  activeClassName: string,
  muttedClassName: string,
}

export default Icon
