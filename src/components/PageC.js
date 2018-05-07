import React from 'react'

export default class pageB extends React.Component {

  componentWillMount() {
    console.log(this.props);
  }
  render() {
      return (
        <div>默认界面C,参数:{this.props.match.params.param}</div>
      )
  }
}
