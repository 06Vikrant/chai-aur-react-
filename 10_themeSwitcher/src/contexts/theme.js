import React, { createContext, useContext } from "react";

// creating a context
export const ThemeContext = createContext({
    // we want whenever someone context the theme  
    // if it directly calls and no value passed then it'll crash 
    // user want to set theme atleast default value ho
    themeMode: 'light',
    // these two are methods jab bhi koi context call krega  then theme mil jaega and method bhi
    darkTheme: () => {},
    lightTheme: () => {},
})

// we can export the provider from the context also
export const ThemeProvider = ThemeContext.Provider

// create custom hooks
// useTheme return useContext 
export default function useTheme() {
    // provide themeContext
    return useContext(ThemeContext)
}