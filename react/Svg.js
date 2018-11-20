import React from 'react'
import { array } from 'prop-types'

const Svg = ({ children, ...props }) => (
  <svg {...props}>
    { children }
  </svg>
)

Svg.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
}

Svg.propTypes = {
  children: array,
}

export default Svg