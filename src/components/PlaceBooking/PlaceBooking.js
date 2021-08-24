import { useContext } from "react";
import { ACTIONS } from "../../bin/reducerState/reducerState";
import { db ,auth} from "../../Lib/Firebase/Firebase";
import FireLoginStatus from "../../Lib/Firebase/FireLoginStatus";
import { pageWrapper } from "../App/App";

const PlaceBooking = ({chosenDate}) => {
  console.log(auth)
  let stateObj=useContext(pageWrapper)
  let [user]=FireLoginStatus()

  function checkLoginAndServiceChosen(){
    console.log("i am")

    if(stateObj.state.ServiceRequired ==="SERVICE_REQUIRED" || !user ){
      console.log("pick a category and sign in")
    }else{
      console.log(user)
          sendToFireBase()
    }
  }

  function sendToFireBase(){
    db.child(auth.currentUser.uid).update({
      date:`${chosenDate.toString().split(" ").slice(0,4)}`,
      service:stateObj.state.ServiceRequired,
      bookingStatus:"Pending"
    })
  }

  return ( 
    <button onClick={checkLoginAndServiceChosen}
     className="place-booking">Place booking</button>
   );
}
 
export default PlaceBooking;