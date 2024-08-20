import { createContext, useEffect, useState } from "react";

export let UserContext = createContext(0);


export function UserContextProvider(props) {
    let [userLogin, setUserLogin] = useState(null);
    useEffect(()=>{
      if (localStorage.getItem('userToken')) {
        setUserLogin(localStorage.getItem('userToken'))
      }
    }, [])
  return (
    <UserContext.Provider value={{userLogin,setUserLogin}}>
        {props.children}
        </UserContext.Provider>
  );
}