import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class Songlist extends Component {
  renderlist() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui divided list">{this.renderlist()}</div>
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

whenever we want the state to be updated, the reducers should be put here
*/
export default connect(mapStateToProps, { selectSong })(Songlist);
