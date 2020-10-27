import React from 'react'
import spinner from '../../img/spinner.gif'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ characters, isLoading }) => {

    return isLoading ? (
        <img
            src={spinner}
            alt="loading wheel"
            className="loading">
        </img>
    ) : (
            <section className='cards'>
                {characters.map((item) => (
                    <CharacterItem key={item.id} item={item}></CharacterItem>
                ))}
            </section>
        )
}

export default CharacterGrid