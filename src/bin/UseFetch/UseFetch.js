import { useEffect, useState } from "react";


const UseFetch = (url) => {

  let [apiData,setApiData]=useState({status:"init"})
  let [incorrectPostcode,setincorrectPostcode] = useState(false)


  useEffect(()=>{

      async function callFetch(){

          const Response = await fetch(url)
          const Data = await Response.json()
          setApiData(Data)
          
        if(Data.status === 404){
          console.log(apiData.result)
          setincorrectPostcode("incorrect postcode, full postcode only!")
        }else if(Data.status === "init"){
          setincorrectPostcode(false)
        }else{
          setincorrectPostcode("incorrect postcode, full postcode only!")
          setincorrectPostcode(false)

        }

      }
      callFetch()
      
  },[url])


  return [apiData,incorrectPostcode];
}
 
export default UseFetch;

// `https://api.postcodes.io/postcodes/${url}`