import React from 'react';
import SearchBar from './searchBar';
import NewJobButton from './newJobButton';
import SortButton from './sortButton';
const createReactClass = require('create-react-class');

export default createReactClass({
  render: function() {
    return (
      <div className={'actionBar'}>
        <SearchBar />
        <SortButton />
        <NewJobButton />
      </div>
    )
  }
});
