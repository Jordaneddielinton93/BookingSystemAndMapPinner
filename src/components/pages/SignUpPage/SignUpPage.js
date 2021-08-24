import "./SignUpPage.css"
import { useContext, useRef, useState, useEffect} from "react"
import { auth, db } from "../../../Lib/Firebase/Firebase"
import UseFetch from "../../../bin/UseFetch/UseFetch";
import { Link, useHistory } from "react-router-dom"
import { pageWrapper } from "../../App/App";
import { ACTIONS } from "../../../bin/reducerState/reducerState";
import PhoneNumber from "../../PhoneNumber/PhoneNumber";

const SignUpPage = () => {
  let stateObj = useContext(pageWrapper)


  let [incorrectPhone,setIncorrectPhone] = useState(null)
  const [fetchPostCode,setfetchPostCode] = useState("")
  const [apiData,incorrectPostcode]=UseFetch(fetchPostCode)

  const [telPhone, setTelPhone] = useState(undefined);
  const nameRef= useRef(null)
  const postcodeRef = useRef(null)
  const emailRef = useRef(null)
  const PasswordRef = useRef(null)

  let history = useHistory();


  function signUp(){
    console.log("is called")
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      PasswordRef.current.value

    ).then(User=>{
     
      
      stateObj.dispatch({type:ACTIONS.SET_DISPLAY_UID,payload:User.user.uid})

      db.child(User.user.uid).set({
        postcode:postcodeRef.current.value,
        lati:apiData.result.latitude,
        longi:apiData.result.longitude,
        displayName:nameRef.current.value,
        PhoneNumber:`${telPhone}`,
        bookingStatus:"none",
        
      })
      history.push("/Booking");

    }).catch(err=>{
      console.log(alert("this is allready an account"))
    })
  }





  async function fetchPostCodeApi(e){
    e.preventDefault()
    setfetchPostCode(`https://api.postcodes.io/postcodes/${postcodeRef.current.value}`)
  }

  function checkPhoneLength() {
    if(telPhone.length === 11){

      signUp()
      setIncorrectPhone(null)
      
    }else{
      postcodeRef.current.value = ""
      setfetchPostCode("")
      setIncorrectPhone("incorrect phone number, 11 digits only")
    }
  }

  useEffect(()=>{
    if(apiData.status===200){
      checkPhoneLength()
    }else{
    }
  },[apiData])
  

  return ( 
    <div className="SignUp">

      

      <form className="SignUp__Form">

          <h1 className="SignUp__Form-title">Sign up</h1>

          <div className="SignUp__UserInfo">

            <label htmlFor="FullName">
          
              <h3>Full name</h3>
              
              <input ref={nameRef}
              name="FullName" type="text" required/>
            </label>

            <label htmlFor="postcode">
              <h3>Postcode</h3>
              
              <input ref={postcodeRef}
               type="search" required />
              <p className="incorrect-postcode">{incorrectPostcode}</p>
            </label>

            <PhoneNumber setTelPhone={setTelPhone}/>
            <p className="incorrect-postcode">{incorrectPhone}</p>

            <label htmlFor="email" required>
            <h3>Email</h3>
              <input ref={emailRef} name="email" type="email" required />
            </label>

            <label htmlFor="Password" required>
              <h3>Password</h3>
              <input ref={PasswordRef} name="Password" type="password" />
            </label>

            

          </div>

          <button onClick={(e)=>fetchPostCodeApi(e)}
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
