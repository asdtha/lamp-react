import React from 'react'
import Bulb from './Bulb'

export default class Lamp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTurnedOn : false,
      test: "Esto es una test"
     
    }
    console.log(props)
  }

  switchLight = () => {
    this.setState({
      isTurnedOn : !this.state.isTurnedOn,
      test:"La cambie al hacer click"
      
      
    })

  }

  render() {
    return (
      <div>
        <Bulb lampara={this.state.isTurnedOn} />
        <Bulb lampara={!this.state.isTurnedOn} />
        <p>The lamp is <b>{this.state.isTurnedOn ? 'on' : 'off'}</b></p>
        <button onClick={this.switchLight}>switch</button>
      </div>
    )
  }
}