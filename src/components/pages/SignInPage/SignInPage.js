import { useRef } from "react"
import { Link } from "react-router-dom"
import { auth } from "../../../Lib/Firebase/Firebase"

import "./SignInPage.css"
const SignInPage = () => {

  const emailRef=useRef(null)
  const PasswordRef=useRef(null)



  function signIn(e){
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      PasswordRef.current.value
    ).then(User=>{
      console.log(User)
    }).catch(err=>console.log(err))
  }




  return ( 
    <div className="SignIn">
      
      

      <form className="SignIn__Form">

      <h1>Sign in</h1>

      <div className="SignIn__UserInfo">

        <label className="SignIn__UserInfo__Form__label" htmlFor="Email">
          <h3>Email</h3>
          <input ref={emailRef} type="text" name="Email"/>
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