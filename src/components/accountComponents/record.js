import React from 'react'
import PropTypes from 'prop-types'


export default class Record extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.title}</td>
        <td>{this.props.amount}</td>
      </tr>
    )
  }
}


Record.PropTypes = {
  id : PropTypes.number,
  date : PropTypes.string,
  title : PropTypes.string,
  amount : PropTypes.number

}


