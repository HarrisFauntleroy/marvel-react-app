import React from 'react'

const Count = ({ counter, isLoading }) => {
    return isLoading ? (
        <div></div>
    ) : (
            <div className="counter">
                <h2>Total results : {counter.total}</h2 >
                <h2>Showing: {counter.count}</h2>
            </div >
        )
}

export default Count
