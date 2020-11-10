import './App.css';
import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import Navbar from './components/ui/Navbar';

const App = () => {

  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    // TODO Add a delay to search input so each character typed isnt a whole new get request
    Axios(`https://gateway.marvel.com/v1/public/characters?`, {
      params: Object.assign({
        apikey: '59ad2aa3fcbed5a077923510a14604cf',
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

  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Navbar />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
