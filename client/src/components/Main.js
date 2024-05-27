import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'

export default function Main() {
    const inputRef = useRef(null)

    // TODO change the styles in ../styles/Main.css
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            <form id='form'>
                <input ref={inputRef} className='userId' type='text' placeholder='Username*' />
            </form>

            <div className='start'>
                <Link className='btn' to={'quiz'}>Start Quiz</Link>
            </div>
        </div>
    )
}