import React from 'react';
import Immutable, {Map, fromJS} from 'immutable';
const createReactClass = require('create-react-class');

const jobList = {
  jobs: {
    job1: {
      jobName: 'Big School', 
      jobId: '001',
      location: 'San Marcos',
      contractor: 'LazyGuys, Inc',
    },
    job2: {
      jobName: 'Big Hospital', 
      jobId: '002',
      location: 'San Diego',
      contractor: 'LazyGals, Inc',
    },
    job3: {
      jobName: 'Big Church', 
      jobId: '003',
      location: 'San Clemente',
      contractor: 'LazyKids, Inc',
    },
  },
  numberOfJobs: 3,
  bigCard: {
      jobName: 'Big School', 
      jobId: 3,
      location: 'San Marcos',
      contractor: 'LazyGuys, Inc',
  },
};

export default createReactClass({
  render: function() {
    return React.cloneElement(this.props.children, {jobList: jobList})
  }
})