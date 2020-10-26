import './App.css';
import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import Header from './components/ui/Header';
import { CharacterGrid } from './components/characters/CharacterGrid';

const App = () => {

  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios('https://gateway.marvel.com/v1/public/characters?apikey=4f47f803daa3f1a7473b5726c6d830f6&ts=1&hash=137f555f5010a03f317ea7bfc5ee3c7a')

      console.log(result.data.data.results)
      setCharacters(result.data.data.results)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
      {/*Passing global state to characters as a prop*/}
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
