import React, { Component } from 'react';
import { connect } from 'react-redux';

class Songlist extends Component {
  render() {
    return (
      <div>Songs</div>
    );
  };
};

// this.props within this component === { songs: state.songs }
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

/* 
input:a function receiving the state from Redux createStore() function
      which is then passed to the Provider as a prop
      state is congifured in combineReducers() function in ./reducers index.js
output: this class based component
*/
export default connect(mapStateToProps)(Songlist);
