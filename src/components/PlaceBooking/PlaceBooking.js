import { useContext } from "react";
import { ACTIONS } from "../../bin/reducerState/reducerState";
import { db ,auth} from "../../Lib/Firebase/Firebase";
import { pageWrapper } from "../App/App";

const PlaceBooking = ({Value,telPhone}) => {

  let stateObj=useContext(pageWrapper)

  let fullListOfProfiles

  function checkAllConditionsAreMetBeforeBooking(){

    if(stateObj.state.ServiceRequired ==="SERVICE_REQUIRED"){
      console.log("error wrong info hit")
    }else{
      console.log("correct")
      console.log(auth.currentUser)
      let userid=auth.currentUser.uid
      db.on("value",(snapshot)=>{
        let profile = snapshot.val()[userid]
        console.log(profile)
          for( let id in profile){
            let newObj=profile[id]
              fullListOfProfiles={...newObj,id}
          }
          stateObj.dispatch({type:ACTIONS.NEW_STATE,payload:fullListOfProfiles})
       })
       
       

      sendToFireBase()
      
    }
  }

  function sendToFireBase(){
    
    console.log(fullListOfProfiles)
       console.log(stateObj.state)
    console.log("this should work"+Value)
    db.child(auth.currentUser.uid).child(fullListOfProfiles.id).set({
      ...fullListOfProfiles,
      date:`${Value}`,
      PhoneNumber:telPhone,

    })

  }

  return ( 
    <button onClick={checkAllConditionsAreMetBeforeBooking}
     className="place-booking">Place booking</button>
   );
}
 
export default PlaceBooking;