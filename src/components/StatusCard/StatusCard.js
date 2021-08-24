import { useState } from "react"
import { useEffect } from "react"
import { auth, db } from "../../Lib/Firebase/Firebase"
import FireLoginStatus from "../../Lib/Firebase/FireLoginStatus"
import "./StatusCard.css"
const StatusCard = () => {

  let [date,setDate] = useState("")
  let [status,setStatus]= useState("")

  let [user]= FireLoginStatus()

  useEffect(()=>{

      db.once("value",(snapshot)=>{
        try {
          let profile = snapshot.child(auth.currentUser.uid).val()
          console.log(profile) 
          try {
          setDate(profile.date)
          setStatus(profile.bookingStatus)
            
          } catch (error) {
            console.log(error)
          }
        
        } catch (error) {
          console.log(error)
        }
      })
    
  },[user])
 
 
    



  return ( 
    <div className="StatusCard">
      <h4>Booking For: {date}</h4>

      <h3 className="StatusCard-Status">Status {status}</h3>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, minus, expedita incidunt aperiam itaque ipsum excepturi harum earum repellat quasi provident asperiores modi voluptatem officia. Rerum ad saepe sequi dignissimos!</p>
      
    </div>
   );
}
 
export default StatusCard;