import { useContext, useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { ACTIONS } from "../../../bin/reducerState/reducerState"
import { auth } from "../../../Lib/Firebase/Firebase"
import { pageWrapper } from "../../App/App"

import "./SignInPage.css"
const SignInPage = () => {

  let stateObj=useContext(pageWrapper)
  let history = useHistory();


  let [incorrectLoginMessage,setIncorrectLoginMessage] = useState(false)

  const emailRef=useRef(null)
  const PasswordRef=useRef(null)



  function signIn(e){
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      PasswordRef.current.value
    ).then(User=>{
      console.log(User)
      stateObj.dispatch({type:ACTIONS.SERVICE_REQUIRED,payload:"Service Required"})
      setIncorrectLoginMessage(false)
      history.push("/Booking")
    }).catch(err=>{
      console.log(err.message)
      setIncorrectLoginMessage("incorrect email or password, sign up?")
    })
  }




  return ( 
    <div className="SignIn">
      

      <form className="SignIn__Form">

      <h1>Sign in</h1>

      <div className="SignIn__UserInfo">

        <label className="SignIn__UserInfo__Form__label" htmlFor="Email">
          <h3>Email</h3>
          <input style={{border:`thick solid ${incorrectLoginMessage?"red":"green"}`}}
          ref={emailRef} type="text" name="Email"/>
          <p className="incorrect-message">{incorrectLoginMessage}</p>
        </label>

        <label className="SignIn__UserInfo__Form__label" htmlFor="Password">
          <h3>Password</h3>
          <input ref={PasswordRef} type="password" name="Password"/>
        </label>

      </div>

        

      <button onClick={signIn}>
        Login
      </button>

      <h2>
        Dont have an account ? <Link to="SignUp">Sign up</Link> 
      </h2>

      </form>

      
    </div>
   );
}
 
export default SignInPage;