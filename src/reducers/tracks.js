const initialState = [
  "Smells like spirit",
  "Enter Sandman"
]

export function playlist(state = initialState, action) {
  console.log("action => ", action);
  if (action.type === 'ADD_TRACK') {
    return [
      ...state.tracks,
      action.payload
    ]     
  } else if (action.type === 'DELETE_TRACK') {
    return state;
  } 
  return state;
}