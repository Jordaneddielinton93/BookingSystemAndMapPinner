import { useContext } from "react";
import { ACTIONS } from "../../bin/reducerState/reducerState";
import { db ,auth} from "../../Lib/Firebase/Firebase";
import FireLoginStatus from "../../Lib/Firebase/FireLoginStatus";
import { pageWrapper } from "../App/App";

const PlaceBooking = ({Value,telPhone}) => {

  let stateObj=useContext(pageWrapper)
  let [user]=FireLoginStatus()
  let fullListOfProfiles

  function checkAllConditionsAreMetBeforeBooking(){

    if(stateObj.state.ServiceRequired ==="SERVICE_REQUIRED" || !user ){
      console.log("pick a category and sign in")
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
    
    console.log(user)
    db.child(user.uid).child(fullListOfProfiles.id).set({
      ...fullListOfProfiles,
      date:`${Value.toString().split(" ").slice(0,4)}`,
      PhoneNumber:telPhone,

    })

    console.log(auth)

  }

  return ( 
    <button onClick={checkAllConditionsAreMetBeforeBooking}
     className="place-booking">Place booking</button>
   );
}
 
export default PlaceBooking;