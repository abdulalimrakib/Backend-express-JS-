import { useNavigate } from "react-router-dom"

import { useState } from "react"
import axios from "axios"


const Login = () => {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const navigate = useNavigate()

  const dataPostHandle = () => {
    axios.post("http://localhost:3001/login", {
      email: userEmail, password: userPassword
    }).then((user) => {
      localStorage.setItem("token", user.data.token)
      navigate("/profile")
    }).catch((err) => {
      console.log(err.message);
      navigate("/login")
    })
  }

  return (
    <div>
      <input type="email" placeholder="User Email" value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} required />
      <input type="password" placeholder="Password" value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} required />
      <button type="submit" onClick={dataPostHandle}>Login</button>
    </div>
  )
}

export default Login