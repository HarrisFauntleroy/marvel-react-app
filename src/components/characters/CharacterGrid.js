import React from 'react'
import spinner from '../../img/spinner.gif'

export const CharacterGrid = ({ characters, isLoading }) => {
    return isLoading ? (<img src={spinner} alt="spinner" className="center"></img>) : (<section className="cards">
        {characters.map((character, i) => (
            <h1 key={i}>{character.name}</h1>
        ))}
    </section>)
}
