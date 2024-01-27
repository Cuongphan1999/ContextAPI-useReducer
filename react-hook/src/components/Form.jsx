import { useContext } from "react"
import { ThemeContext } from "../context/ThemContext"
export default function Form() {
    const {theme, handleChangeTheme} = useContext(ThemeContext) //su dung data trong form -> sd themcontext thif thong qua usecontext
    //console.log('Form');
    return (
        <>
            <button className={`btn btn-sm d-flex ${theme=== 'light' ? 'btn-dark' : 'btn-secondary'}`}
                onClick={handleChangeTheme}
            >Dark Mode</button>
            <form className={`p-3 border ${theme}`}>
                <div className="form-group mb-2 d-flex">
                    <label className="form-label me-2">Username</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-2 d-flex">
                    <label className="form-label me-2">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="form-group mb-2 d-flex">
                    <label className="form-label"></label>
                    <button className="btn btn-secondary">Login</button>
                </div>
            </form>
        </>

    )
}

//chuy btn vo form check co thay doi bg k? //onclick phai de app.jsx// js co khi niem closer cha khi vo duoc thang con