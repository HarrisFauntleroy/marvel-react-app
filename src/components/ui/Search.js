import React, { useState } from 'react';

const Search = ({ getQuery, getFilter }) => {

    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    let handleClick = (filter) => {
        getFilter(filter)
    }

    return (

        <nav className="navbar">
            <ul>
                <li>
                    <button onClick={(filter) => handleClick('characters')} href="/characters">Characters</button >
                </li>
                <li>
                    <button onClick={(filter) => handleClick('comics')} href="/comics">Comics</button >
                </li>
                <li>
                    <button onClick={(filter) => handleClick('creators')} href="/creators">Creators</button >
                </li>
                <li>
                    <button onClick={(filter) => handleClick('events')} href="/events">Events</button >
                </li>
                <li>
                    <button onClick={(filter) => handleClick('series')} href="/series">Series</button >
                </li>
                <li>
                    <button onClick={(filter) => handleClick('stories')} href="/stories">Stories</button >
                </li>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </ul>
        </nav >

    )
}

export default Search
