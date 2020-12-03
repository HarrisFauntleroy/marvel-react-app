import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Search from './components/ui/Search';
import Header from './components/ui/Header';
import Count from './components/ui/Count';
import ItemGrid from './components/Items/ItemGrid';
import Footer from './components/ui/Footer';

const App = () => {

  // State 
  const [characters, setCharacters] = useState([])
  const [count, setCount] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('characters')

  // Debouncing Function, perhaps move to its own file
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

  useEffect(() => {

    axios(`https://gateway.marvel.com/v1/public/` + filter + `?`, {
      params: Object.assign({
        apikey: process.env.REACT_APP_APIKEY,
        ts: '1',
        hash: 'd4db04e586186471a9f4b0d9fc0f1697',
        limit: '25'
      },
        query !== '' && filter === 'characters' ? { nameStartsWith: query } : null,
      )
    }).then(res => {
      setCharacters(res.data.data.results)
      setCount(res.data.data)
      setIsLoading(false)
      console.log(characters);

    }).catch(function (err) {
      console.error(err);
    })

  }, [query, filter])

  return (
    <div className="flex-parent">
      <Search getQuery={debounce((q) => setQuery(q), 1000)} getFilter={(filter) => setFilter(filter)} />
      <div className="flex-container">
        <Header />
        <Count counter={count} isLoading={isLoading} />
        <ItemGrid isLoading={isLoading} characters={characters} />
      </div>
      <Footer />
    </div>
  )
}

export default App;
