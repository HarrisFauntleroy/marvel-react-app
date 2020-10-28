import React from 'react'
import spinner from '../img/spinner.gif'

const Spinner = () => {
    return (
        <div>
            <img
                src={spinner}
                alt="loading wheel"
                className="loading">
            </img>
        </div>
    )
}

export default Spinner
