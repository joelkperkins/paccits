import React from 'react';

const createReactClass = require('create-react-class');

export default createReactClass({
  render: function() {
    return (
        <button className={'sortButton'}>Sort Jobs By:</button>
    )
  }
});