import React from 'react'

const createReactClass = require('create-react-class');

export default createReactClass({
  render: function() {
    return (
        <input className={'searchBar'} placeholder={'Search Jobs'}></input>
    )
  }
});