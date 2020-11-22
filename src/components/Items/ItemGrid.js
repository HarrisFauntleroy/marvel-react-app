import React from 'react'
import Spinner from '../ui/Spinner'
import Item from './Item'

const ItemGrid = ({ characters, isLoading }) => {

    return isLoading ? (
        <Spinner></Spinner>
    ) : (
            <section className='cards'>
                {characters.map((item) => (
                    <Item key={item.id} item={item}></Item>
                ))}
            </section>
        )
}

export default ItemGrid