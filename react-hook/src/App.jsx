import { createContext, useState } from 'react'
import './App.css'
import Panel from './components/panel'
//context api
//1: tao context
//2: provider(cung cap data)
//3: consumer (noi su dung data)
export const ThemeContext = createContext()  //theme context bien cung cap data

function App() {
  const [theme, setTheme] = useState('light')
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
     <ThemeContext.Provider value={{theme, handleChangeTheme}}>  {/* {//[mang] or {obj}} */}
      <div className={`container w-50 p-3 border  ${theme}`}>
       {/* <button className={`btn btn-sm ${theme === 'light' ? 'btn-dark' : 'btn-secondary'}`}
          onClick={handleChangeTheme}
        >Dark Mode</button> */}
        <Panel/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
//dua data vao trong value= {theme}