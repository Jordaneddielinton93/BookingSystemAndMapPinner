import "./BookingPage.css"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useContext, useState } from "react";
import BookingServices from "../../BookingServices/BookingServices";
import { pageWrapper } from "../../App/App";
import PlaceBooking from "../../PlaceBooking/PlaceBooking";
import Map from "../../GoogleMap/Map";
import StatusCard from "../../StatusCard/StatusCard";
import FireLoginStatus from "../../../Lib/Firebase/FireLoginStatus";
const BookingPage = () => {


  
var date = new Date();
date.setDate(date.getDate() + 3);
// sets the day they can make a Booking

let [user]= FireLoginStatus()


  const [chosenDate, onChange] = useState(date);
  
  return ( 
    <div className="booking">
      <main className="booking__main">

        <section className="booking__main__userCard">

          {
            user?(
            <>
            <StatusCard/> <Map/>
            </>
            ):<>Please sign in to place a booking</>
          }

          
          
         


        </section>

        <div className="booking__main__calanderAndServicesBox">

          <section className="booking__main__calander">
            <Calendar
              minDate={date}
              onChange={onChange}
              value={chosenDate}
            />
            {/* callander above map below */}

          </section>

          <section className="booking__main__services" >
            <BookingServices />
            <PlaceBooking 
            chosenDate={chosenDate}
            
            />

          </section>

        </div>
      </main>
    </div>
   );
}
 
export default BookingPage;