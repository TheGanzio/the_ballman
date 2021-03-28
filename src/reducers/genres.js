const initialState = {
  genre: 'IT',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_GENRE':
      return {
        ...state,
        genre: action.payload,
      };
    default:
      return state;
  }
}