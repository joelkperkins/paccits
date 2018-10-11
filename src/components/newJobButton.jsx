import React from 'react';

const createReactClass = require('create-react-class');

export default createReactClass({
  render: function() {
    return (
        <button className={'addJobButton'}>Add New Job</button>
    )
  }
});