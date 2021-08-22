import "./SignUpPage.css"
import { useContext, useRef, useState } from "react"
import { auth, db } from "../../../Lib/Firebase/Firebase"
import UseFetch from "../../../bin/UseFetch/UseFetch";
import { Link, useHistory } from "react-router-dom"
import { pageWrapper } from "../../App/App";
import { ACTIONS } from "../../../bin/reducerState/reducerState";

const SignUpPage = () => {
  let stateObj = useContext(pageWrapper)



  const [PostCode,setPostcode] = useState("")
  const [Url,setUrl] = useState("")
  const [apiData]=UseFetch(Url)


  const [name,setName]= useState(null)

  const emailRef=useRef(null)
  const PasswordRef=useRef(null)

  let history = useHistory();


  function signUp(e,apiData){
    e.preventDefault()
    
    
    auth.createUserWithEmailAndPassword(

      emailRef.current.value,
      PasswordRef.current.value

    ).then(User=>{
      console.log(User.user)
      history.push("/Booking");
      stateObj.dispatch({type:ACTIONS.SET_DISPLAY_UID,payload:User.user.uid})
      db.child(User.user.uid).push({
        postcode:PostCode,
        lati:apiData.latitude,
        longi:apiData.longitude,
        displayName:name
      })

    }).catch(err=>console.log(err))
  }



  function checkPostCode_andThen_SignUp(e){
    if(apiData && name.length >6){
      signUp(e,apiData.result)
      stateObj.dispatch({type:ACTIONS.SET_POSTCODE,payload:apiData.result.postcode})
      console.log("your postcode is "+ apiData.result.postcode)
    }else{
      alert("not a valid postcode and or full name required")
    }
  }

  try{
    console.log(apiData.result)
      
    }catch{
      console.log("no")
  
    }

  return ( 
    <div className="SignUp">

      

      <form className="SignUp__Form">

          <h1>Sign up</h1>

          <div className="SignUp__UserInfo">

            <label htmlFor="FullName">
          
              <h3>Full name</h3>
              
              <input onChange={(e)=>setName(e.target.value)}
              name="FullName" type="text" required/>
            </label>

            <label htmlFor="postcode">
              <h3>Postcode</h3>
              
              <input required
              onChange={(e)=>setPostcode(e.target.value)} type="search" />

              <button onClick={()=>setUrl(`https://api.postcodes.io/postcodes/${PostCode}`)}>search</button>

            </label>

            <label htmlFor="email" required>
            <h3>Email</h3>
              <input ref={emailRef} name="email" type="email" required />
            </label>

            <label htmlFor="Password" required>
              <h3>Password</h3>
              <input ref={PasswordRef} name="Password" type="password" />
            </label>

          </div>

          <button onClick={checkPostCode_andThen_SignUp}
          className="signUp"
          >Sign up</button>

        <h2>
          Allready have an account ? <Link to="SignIn">Sign In</Link> 
        </h2>
        </form>

    </div>
   );
}
 
export default SignUpPage;