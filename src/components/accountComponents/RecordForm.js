import React,{Component} from 'react'
import * as RecordsApi from '../../utils/RecordApi'

export default class RecordForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      date : '',
      title : '',
      amount : ''
    }
  }

  valid() {
    return this.state.date && this.state.title && this.state.amount
  }

  handleChange(event) {
    let name,obj;
    name = event.target.name
    this.setState((
      obj = {},obj[''+name] = event.target.value,obj
    ))
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      date : this.state.date,
      title : this.state.title,
      amount : Number.parseInt(this.state.amount)
    }

    RecordsApi.create(data).then(

      response =>{
        this.props.handleNewRecord(response.data)
        this.setState({
          date : '',
          title : '',
          amount : ''
        })
      }


    ).catch (
      error => console.log(error.message)
    )

  }

  render(){
    return (
      <form className="form-inline mb-3" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-app mr-1">
          <input type="text" className='form-control' onChange={this.handleChange.bind(this)} placeholder='Date' name='date' value={this.state.date} />
        </div>

        <div className="form-app mr-1">
          <input type="text" className='form-control'  onChange={this.handleChange.bind(this)} placeholder='Title' name='title' value={this.state.title} />
        </div>
        <div className="form-app mr-1" >
          <input type="text" className='form-control'  onChange={this.handleChange.bind(this)} placeholder='amount' name='amount' value={this.state.amount} />
        </div>

        <button type='submit' className="btn btn-primary" disabled={!this.valid()}>Create Records</button>
      </form>
    )

  }



}
