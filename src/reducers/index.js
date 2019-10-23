// MODELS
// in charge of holding the current state of the application -  always returning objects
import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Mirage', duration: '5:04' },
    { title: 'Tipikus Arvajelleg', duration: '8:52' },
    { title: 'Everything falls apart', duration: '4:17' },
    { title: 'Juular', duration: '3:47' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

// Collects all the reducers in an object
// will be passed as a prop to the Store
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
