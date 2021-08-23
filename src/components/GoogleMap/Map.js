import React from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.css"
import LocationMarker from "./LocationMarker";
import { auth, db } from "../../Lib/Firebase/Firebase";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

  export default function SimpleMap(){

    let [LAT,setLAT]=useState()
    let [LONGI,setLONGI]=useState()


    useEffect(()=>{
      db.once("value",(snapshot)=>{

        try {

          let profile = snapshot.child(auth.currentUser.uid).val()
        console.log(profile)
          
        setLAT(profile.lati)
        setLONGI(profile.longi)
          
        } catch (error) {
          console.log(error)
        }
      })
    },[db])


    const defaultProps = {
      center: {
        lat: 52.489471,
        lng: -1.898575
      },
      zoom: 10
    };

  return ( 
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
        <LocationMarker lat={LAT} lng={LONGI}/>
      </GoogleMapReact>
    </div>
  );
}



// Map.deaultProps={
//   center:{
//     lat:52.4862,
//     lng:1.8904
//   },
//   zooom:6
// }
 




