import React from 'react';

const createReactClass = require('create-react-class');

export default createReactClass({
  render: function() {
    return (
      <div key={this.props.jobDetails.jobId} className={'jobCard'}>
        <h4>Job ID: {this.props.jobDetails.jobId}</h4>
        <h4>Job Name: {this.props.jobDetails.jobName}</h4>
        <h4>Job Location: {this.props.jobDetails.location}</h4>
        <h4>Contractor: {this.props.jobDetails.contractor}</h4>
        <button className={'detailsButton'}>View Job Details</button>
      </div>
    )
  }
})
