import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import { Link } from 'react-router-dom'
export const SignUp = (props: any) => {
  const {signup} = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // console.log(props)
  const handleSubmit = (e: any) => {
    e.preventDefault()
    signup(email, password, props.history)
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" value={email} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} />
        </label>
        <label>
          password
          <input name="password" type="password" placeholder="Password" value={password} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}/>
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <br />
      <Link to="/login">login ?</Link>
    </div>
  )
}
