import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log(token);
    axios.get("http://localhost:3001/profile", {
      headers: {
        Authorization: token
      }
    }).then(() => {

    }).catch((err) => {
      navigate("/login")
      console.log(err.message);
    })
  }, [])

  return (
    <div>Profile</div>
  )
}

export default Profile