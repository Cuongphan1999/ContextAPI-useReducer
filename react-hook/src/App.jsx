import { useContext } from 'react'
import './App.css'
import Panel from './components/panel'
import  { ThemeContext } from './context/ThemContext'
//context api
//1: tao context
//2: provider(cung cap data) //themes context . providers -> value
//3: consumer (noi su dung data) //thong qua use context
function App() {
  const theme = useContext(ThemeContext)
  return (
      <div className={`container w-50 p-3 border  ${theme}`}>
        <Panel/>
      </div>
  )
}
export default App
//dua data vao trong value= {theme}