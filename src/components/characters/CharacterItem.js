import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={`${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension} `} alt='' />
                </div>
                <div className='card-back'>
                    <h1 className="center">{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Character Name:</strong> {item.name}
                        </li>
                        <li>
                            <strong>Description:</strong> {item.description}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
