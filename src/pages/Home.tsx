import {useContext} from 'react'
import { auth } from '../base'
import { AuthContext } from '../auth/AuthProvider'

export const Home = (props: any) => {
  const {currentUser} = useContext(AuthContext)
  // console.log(currentUser)
  const signout = () => {
    auth.signOut()
    console.log(currentUser)
    props.history.push("/login")
  }
  return (
    <div>
      <h2>Home Page</h2>
      <h3>email: {currentUser.email}</h3>
      <button onClick={signout}>Sign out</button>
    </div>
  )
}
