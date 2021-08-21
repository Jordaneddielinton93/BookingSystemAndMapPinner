import { useEffect, useState } from "react";


const UseFetch = (url) => {

  let [apiData,setApiData]=useState(undefined)

  useEffect(()=>{

    if(url.length > 0){

      async function callFetch(){

        const Response = await fetch(url)
  
        const Data = await Response.json()
  
        setApiData(Data)
      }
  
      callFetch()


    }
    

  },[url])







  return [apiData];
}
 
export default UseFetch;

// `https://api.postcodes.io/postcodes/${url}`