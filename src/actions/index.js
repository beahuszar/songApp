// Action creator - CONTROLLER
// Whenever you want something to happen in the app
// named export
// how to import it:
// import { selectSong } from '../actions' -> as index.js, no file specification needed

export const selectSong = (song) => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

