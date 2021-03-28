export const actionTypes = {
    SET_GENRE: 'set posts genre',
  };
  
  export const appActions = {
    setGenre: genre => ({
      type: actionTypes.SET_GENRE,
      payload: genre,
    }),
  };
  