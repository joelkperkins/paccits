import React from 'react';
import ReactDOM from 'react-dom';
import JobDisplay from './components/jobDisplay';

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
  bigCard: {},
};

ReactDOM.render(
  <JobDisplay jobList={jobList} />,
  document.getElementById('app'),
);