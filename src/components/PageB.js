import React from 'react'
import {Prompt} from 'react-router-dom'

export default class pageB extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      power : false
    }
    this.changePower = this.changePower.bind(this)
  }
  changePower(){
    alert('已经开启');
    this.setState({
      power:true
    })
  }




  render() {
      return (
        <div>
          默认界面B
          <Prompt message = "残忍离开？"/>
          <button onClick={this.changePower}>启用</button>
        </div>
      )
  }
}
