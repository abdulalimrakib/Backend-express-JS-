import { useNavigate } from "react-router-dom"

import { useState } from "react"
import axios from "axios"


const Register = () => {
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const navigate = useNavigate()

  const dataPostHandle = () => {
    console.log(userName, userEmail, userPassword);
    axios.post("http://localhost:3001/register", {
      name: userName, email: userEmail, password: userPassword
    }).then((user) => {
      console.log(user);
      navigate("/login")
    }).catch((err) => {
      console.log(err.message);
      navigate("/register")
    })
  }

  return (
    <div>
      <input type="text" placeholder="User Name" value={userName} onChange={(e) => { setUserName(e.target.value) }} required />
      <input type="email" placeholder="User Email" value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} required />
      <input type="password" placeholder="Password" value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} required />
      <button type="submit" onClick={dataPostHandle}>Register</button>
    </div>
  )
}

export default Register