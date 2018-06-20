const initialState = [
  "My work playlist",
  "My home playlist"
];

export default function playlist(state = initialState, action) {
  //console.log("action => ", action);
  if (action.type === 'ADD_PLAYLIST') {
    return [
      ...state.playlists,
      action.payload
    ]     
  } else if (action.type === 'DELETE_PLAYLIST') {
    return state;
  } 
  return state;
}