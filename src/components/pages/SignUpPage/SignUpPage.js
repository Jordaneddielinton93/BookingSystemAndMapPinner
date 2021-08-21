import "./SignUpPage.css"
import { useRef, useState } from "react"
import { auth } from "../../../Lib/Firebase/Firebase"
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import UseFetch from "../../../bin/UseFetch/UseFetch";
import { Link } from "react-router-dom"





const SignUpPage = () => {
  const [PostCode,setPostcode] = useState("")
  const [Url,setUrl] = useState("")
  const [apiData]=UseFetch(Url)


  const [name,setName]= useState(null)

  const emailRef=useRef(null)
  const PasswordRef=useRef(null)

  function signUp(e){
    e.preventDefault()
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      PasswordRef.current.value
    ).then(User=>{
      console.log(User)
      return User.user.updateProfile({
        displayName: name,
      })
    }).catch(err=>console.log(err))
  }

  function checkPostCode_andThen_SignUp(e){
    if(apiData && name.length >6){
      signUp(e)
    }else{
      console.log("not a valid postcode and or full name required")
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