import React from 'react'
import Spinner from '../Spinner'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ characters, isLoading }) => {

    return isLoading ? (
        <Spinner></Spinner>
    ) : (
            <section className='cards'>
                {characters.map((item) => (
                    <CharacterItem key={item.id} item={item}></CharacterItem>
                ))}
            </section>
        )
}

export default CharacterGrid