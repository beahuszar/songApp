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