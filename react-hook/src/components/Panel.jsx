import { useContext } from 'react';
import { ThemeContext } from '../App';
import Form from './Form';
export default function Panel() {
    const theme = useContext(ThemeContext)
    return (
        <div className={`p-4 border ${theme}`}>

            <Form/>
        </div>
    )
}