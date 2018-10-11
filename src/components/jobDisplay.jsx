import React from 'react';
import JobCard from './jobCard';
import ActionBar from './actionBar';


const createReactClass = require('create-react-class');

export default createReactClass({
  render: function() {
    const jobsArray = [];
    for (let i = 1; i < this.props.jobList.numberOfJobs + 1; i += 1) {
      jobsArray.push(
        <JobCard key={'job' + i} jobDetails={this.props.jobList.jobs['job' + i]} />
        );
      }
      return (
        <div>
          <ActionBar />
          <div className="jobList">{jobsArray}</div>
        </div>
      )
  }
});