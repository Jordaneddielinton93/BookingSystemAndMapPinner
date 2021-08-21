

export let ACTIONS={
  SET_URL:"SET_URL_FOR_SEARCH"
}


export let initialState ={
  Url:"hi"
}



export function Reduce(state,action){
  switch (action.type) {
    case ACTIONS.SET_URL:
        return{
          ...state,
          Url:action.payload
        }

    default:
      break;
  }
}