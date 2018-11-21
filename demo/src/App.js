import React, { Component, Fragment } from 'react'
import 'vtex-tachyons'
import Svg from '../../react/Svg'
import Icon from '../../react/Icon'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      size: 200
    }
    this.toogle = this.toogle.bind(this);
  }

  toogle () {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render () {

    const defs = (
      <Svg width='0' height='0' style={{display: 'none'}}>
        <defs>

          <g id="grid">
            <rect width="6.73684" height="7" fill="currentColor" />
            <rect x="9.2627" width="6.73684" height="7" fill="currentColor" />
            <rect width="6.73684" height="1" transform="matrix(1 0 0 -1 9.2627 9)" fill="currentColor" />
            <rect width="6.73684" height="1" transform="matrix(1 0 0 -1 0 9)" fill="currentColor" />
            <rect y="10" width="6.73684" height="7" fill="currentColor" />
            <rect x="9.2627" y="10" width="6.73684" height="7" fill="currentColor" />
            <rect width="6.73684" height="1" transform="matrix(1 0 0 -1 9.2627 19)" fill="currentColor" />
            <rect width="6.73684" height="1" transform="matrix(1 0 0 -1 0 19)" fill="currentColor" />
          </g>
  
          <g id="eyesight-enable" transform="translate(0, 0)">
            <path
              fill="currentColor"
              d="M8,14c3.6,0,6.4-3.1,7.6-4.9c0.5-0.7,0.5-1.6,0-2.3C14.4,5.1,11.6,2,8,2C4.4,2,1.6,5.1,0.4,6.9c-0.5,0.7-0.5,1.6,0,2.2C1.6,10.9,4.4,14,8,14z M8,5c1.7,0,3,1.3,3,3s-1.3,3-3,3S5,9.7,5,8S6.3,5,8,5z"
            />
          </g>

          <g id="single-item-grid">
            <rect width="10" height="14" fill="currentColor" />
            <rect y="16" width="10" height="3" fill="currentColor" />
          </g>

        </defs>
      </Svg>
    )

    return (
      <Fragment>
  
        { defs }

        <a 
          className="f3 link ph4 pv4 dib white bg-rebel-pink pointer absolute top-0 right-0"
          onClick={ this.toogle }
        >
          Toggle State
        </a>

        <div className="flex center justify-around w-80 pv6">
          <Icon id="grid" isActive={this.state.isActive} size={this.state.size} viewBox="0 0 16 19" activeClassName="yellow" muttedClassName="washed-yellow" />
          <Icon id="eyesight-enable" isActive={this.state.isActive} size={this.state.size} viewBox="0 0 16 16" />
          <Icon id="single-item-grid" isActive={this.state.isActive} size={this.state.size} viewBox="0 0 10 19" activeClassName="green" muttedClassName="washed-green" />
        </div>
  
      </Fragment>
    )

  }
  
}

export default App
