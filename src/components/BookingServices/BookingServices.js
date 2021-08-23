import { useContext, useState } from "react";
import { bikeServiceObjArr } from "../../bin/bikeServiceObjArr/bikeServiceObjArr";
import { ACTIONS } from "../../bin/reducerState/reducerState";
import { pageWrapper } from "../App/App";
import "./BookingServices.css"
const BookingServices = () => {

  let stateObj = useContext(pageWrapper)
  
  

  let [service,setService] = useState("")


  return ( 
    <div className="Services">

      <h1 className="Services-title">{stateObj.state.ServiceRequired}</h1>
      <input
        className="Services__input"
        onChange={(e)=>setService(e.target.value)}
        type="text"
        />

      <div className="Services__partsList">
        {
          service.length===0?bikeServiceObjArr.map((item)=>{
          return (

          <li onClick={()=>stateObj.dispatch({
            type:ACTIONS.SERVICE_REQUIRED,
            payload:item.bikePart
          })} key={item.id}>{item.bikePart}</li>

          )
        }):

        bikeServiceObjArr.map((item)=>{
          return item.bikePart.toLowerCase().includes(service.toLowerCase())?

          <li key={item.id}
          onClick={()=>stateObj.dispatch({
            type:ACTIONS.SERVICE_REQUIRED,
            payload:item.bikePart
          })}
          
          
          >{item.bikePart}</li>:<></>
        })

        }
      </div>
    </div>
   );
}
 
export default BookingServices;