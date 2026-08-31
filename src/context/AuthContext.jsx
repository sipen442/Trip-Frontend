import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
const [token,setToken] =useState(localStorage.getItem("token")||null);
const [userData,setUserData] = useState(null);


const onLogin = (jwtToken,user)=>{
   setToken(jwtToken);
   setUserData(user);

   localStorage.setItem("token",jwtToken);
}
onLogout = ()=>{
setToken(null);
setUserData(null);
 localStorage.setItem(null);
}
return (
    <AuthContext.Provider values={{token,userData,onLogin,onLogout}}>
        {children}

    </AuthContext.Provider>
)
}
