import React from 'react';
import Record from './record';
import axios from 'axios'

class Records extends React.Component {

  constructor(){
    super()
    this.state = {
      error:null,
      isLoad:false,
      records:[]
    }

  }

  componentDidMount(){
    axios.get('http://localhost:3004/records').then(
      response => this.setState({
        records:response.data,
        isLoad:true

      })

    ).catch(
      error => this.setState({
        isLoad: false,
        error
      })
    );
  }

  render() {
    const {error, isLoad, records} = this.state;
    if (error) {
      return <div>Error : {error.message}</div>

    }else if (!isLoad) {
      return <div>Loading...</div>
    }else {
      return (
        <div>
          <h2>Records</h2>
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            {records.map((record) => <Record key={record.id} {...record} record={record}/>)}

            </tbody>
          </table>
        </div>
      )

    }


  }
}

export default Records;
