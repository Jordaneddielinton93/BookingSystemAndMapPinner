import { GiCartwheel } from 'react-icons/gi';
import "./GoogleMap.css"
const LocationMarker = ({lat,lng, onclick}) => {
  return ( 
    <div className="location-marker" style={{fontSize:"2rem",color:"yellow"}}>
      <GiCartwheel className="wheel" />
    </div>
   );
}
 
export default LocationMarker;