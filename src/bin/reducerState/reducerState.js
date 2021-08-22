

export let ACTIONS={
  SET_POSTCODE:"SET_POSTCODE",
  SERVICE_REQUIRED:"SERVICE_REQUIRED",
  SET_DISPLAY_UID:"SET_DISPLAY_UID",
  NEW_STATE:"NEW_STATE"
}


export let initialState ={
  Postcode:undefined,
  ServiceRequired:"Service Required",
  DisplayUID:undefined,
}



export function Reduce(state,action){
  switch (action.type) {
    case ACTIONS.SET_POSTCODE:
        return{
          ...state,
          Postcode:action.payload
        }
    case ACTIONS.SERVICE_REQUIRED:
      return{
        ...state,
        ServiceRequired:action.payload
      }
    case ACTIONS.SET_DISPLAY_UID:
      return{
        ...state,
        DisplayUID:action.payload
      }
    case ACTIONS.NEW_STATE:
      console.log(action.payload)
      return action.payload

    
    default:
      break;
  }
}