import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/AuthProvider'

export const Login = (props:any) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {login} = useContext(AuthContext)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    login(email, password, props.history)
    setEmail("")
    setPassword("")
  }
  // console.log("login")
  // console.log(props)
  // console.log(currentUser)
  return (
    <div>
      <h1>log in</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" value={email} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} />
        </label>
        <label>
          password
          <input name="password" type="password" placeholder="Password" value={password} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}/>
        </label>
        <button type="submit">Log in</button>
      </form>
      <br />
      <Link to="/signup">create new account ?</Link>
    </div>
  )
}
