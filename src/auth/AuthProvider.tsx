import React , {createContext, useEffect, useState}from 'react'
import {auth} from "../base"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"

interface AuthContextInterface {
  signup: any;
  login: any;
  currentUser: any;
}

export const AuthContext = createContext<AuthContextInterface>({signup: null, login: null, currentUser: null});
export const AuthProvider: React.FC = (props: any) => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  const signup = async (email:string, password:string, history:any) => {
    try{
      await createUserWithEmailAndPassword(auth, email, password)
      history.push("/")
    }catch(error: any){
      alert(error.message)
    }
  }

  const login = async (email:string, password:string, history:any) => {
    try{
      await signInWithEmailAndPassword(auth, email, password)
      history.push("/")
    }catch(error: any){
      alert(error.message)
    }
  }

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, (user)=>{
      user ? setCurrentUser({...user}) : setCurrentUser(null)
    })
    return () => unSub()
  }, [])


  return (
    <AuthContext.Provider
      value={{
        signup: signup,
        login: login,
        currentUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
