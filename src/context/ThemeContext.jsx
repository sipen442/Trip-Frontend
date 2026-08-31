import {  createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemProvider  = ({Children})=>{
    const [theme,setTheme] =useState(localStorage.getItem("theme")||"light");

    const changeTheme =(userTheme)=>{
        setThem(userTheme)
    }
    return(
        <ThemeContext.Provider valuse ={{theme ,changeTheme}}>
               {Children}
        </ThemeContext.Provider>
         
       
    )
}