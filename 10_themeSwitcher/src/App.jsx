import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { Card, ThemeBtn } from './components'
import { ThemeProvider } from './contexts/theme'

export default function App() {
  // theme mode direct value is light
  const [themeMode, setThemeMode] = useState('light')

  // to get the functionality of the methods
  const lightTheme = () => {
    setThemeMode('light')
    // setThemeMode('light' ? 'light' : 'dark')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // actual change in a theme mode
  useEffect(() => {
    // code is running in client-side mode
    document.querySelector('html').classList.remove('light', 'dark')
    // add kya karna h themeMode as everything is going inside my state themeMode
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])




  return (
    // now we need to allow access to those values by passing them here   
    // now we get access to the ThemeContext values as ThemeProviders is already here
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          {/* themeBtn comp */}
                          <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                          {/* card comp */}
                          <Card />
                </div>
            </div>
        </div>
    </ThemeProvider>
  )
}


