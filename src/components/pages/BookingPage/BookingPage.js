import "./BookingPage.css"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useContext, useState } from "react";
import BookingServices from "../../BookingServices/BookingServices";
import { pageWrapper } from "../../App/App";
import PlaceBooking from "../../PlaceBooking/PlaceBooking";
const BookingPage = () => {


  let stateObj= useContext(pageWrapper)
  
var date = new Date();
date.setDate(date.getDate() + 3);
// sets the day they can make a Booking



  const [value, onChange] = useState(date);
  const [telPhone, setTelPhone] = useState(undefined);
  console.log(value)
  return ( 
    <div className="booking">
      <main className="booking__main">

        <section className="booking__main__userCard">

        </section>

        <div className="booking__main__calanderAndServicesBox">

          <section className="booking__main__calander">
            <Calendar
              minDate={date}
              onChange={onChange}
              value={value}
            />
            {/* callander above map below */}

          </section>

          <section className="booking__main__services" >
            <BookingServices />

            <label htmlFor="">
              <p className="booking__main__services-title">Phone Number</p>
              <input className="booking__main__services-input"
              onChange={(e)=>setTelPhone(e.target.value)}
               type="tel" />

            </label>
            
            
            <PlaceBooking 
            Value={value}
            telPhone={telPhone}
            />

          </section>

        </div>
      </main>
    </div>
   );
}
 
export default BookingPage;