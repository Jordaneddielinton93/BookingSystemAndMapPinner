import { useEffect, useState } from "react"
import { auth } from "../../Lib/Firebase/Firebase";

const FireLoginStatus = () => {

  const [user,setUser] = useState(null)
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(
      userAuth => {
        const user = {
          uid:userAuth?.uid,
          email:userAuth?.email
        }
        if(userAuth){
          console.log(userAuth)
          setUser(user)
        }else{
          setUser(null)
        }
      }
    )
    return unsubscribe
  },[])





  return [user];
}
 
export default FireLoginStatus;