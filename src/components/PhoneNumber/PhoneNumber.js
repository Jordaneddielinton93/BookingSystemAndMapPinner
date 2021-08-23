const PhoneNumber = ({setTelPhone}) => {
  return ( 
    <label htmlFor="">
      <h3 className="booking__main__services-title">Phone Number</h3>
      <input className="booking__main__services-input"
      onChange={(e)=>setTelPhone(e.target.value)}
        type="tel" />

    </label>
   );
}
 
export default PhoneNumber;