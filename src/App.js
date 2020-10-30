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

    Axios.get(`https://gateway.marvel.com/v1/public/characters?`, {
      params: Object.assign({
        apikey: '4f47f803daa3f1a7473b5726c6d830f6',
        ts: '1',
        hash: '137f555f5010a03f317ea7bfc5ee3c7a'
      },
        query !== '' ? { nameStartsWith: query } : null
      )
    }).then((res) => {
      console.log(res)
      setCharacters(res.data.data.results)
      setIsLoading(false)
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
