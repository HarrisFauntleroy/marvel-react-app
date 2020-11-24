import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Header from './ui/Header';
import ItemGrid from './Items/ItemGrid';
import Search from './ui/Search';

export const Main = () => {

    // State variables
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [filter, setFilter] = useState('characters')

    // Debouncing Function, adds 1s delay before function since last call
    const debounce = (callback, delay) => {
        let timeoutID;
        return function (...args) {
            if (timeoutID) {
                clearTimeout(timeoutID)
            }
            timeoutID = setTimeout(() => {
                callback(...args)
            }, delay)
        }
    }

    // Primary API call
    // Searchs based on 'filter' state 
    //possible values (characters, comics, creators, events, series, stories)
    // Searches also based on 'query' state, a searchable value
    useEffect(() => {
        axios(`https://gateway.marvel.com/v1/public/` + filter + `?`, {
            params: Object.assign({
                apikey: process.env.REACT_APP_APIKEY,
                ts: '1',
                hash: 'd4db04e586186471a9f4b0d9fc0f1697'
            },
                query !== '' ? { nameStartsWith: query } : null
            )
        }).then(res => {
            setCharacters(res.data.data.results)
            setIsLoading(false)
            console.log(res)

        }).catch(function (err) {
            console.log(err);
        })

    }, [query, filter])

    return (
        <div>
            <Search getQuery={debounce((q) => setQuery(q), 1000)} getFilter={(filter) => setFilter(filter)} />
            <Header />
            <div className="card-container">
                <ItemGrid isLoading={isLoading} characters={characters} />
            </div>
            <footer>
                <span>See the source <i className="fab fa-github"></i></span>
            </footer>
        </div>
    )
}
