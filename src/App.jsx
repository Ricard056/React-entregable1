import './App.css'
import Button from './components/Button'
import Phrases from './components/Phrases'
import phrases from './utils/phrases.json'
import getRandomArray from './utils/getRandomArray'
import { useState } from 'react'

const imgs = [1, 2, 3, 4];

function App() {

  const [phrasesRandom, setPhrasesRandom] = useState(getRandomArray(phrases));
  const [numberImg, setNumberImg] = useState(getRandomArray(imgs));

  // console.log(phrasesRandom) // console.log(numberImg)

  const appStyle = {
    backgroundImage: `url('/backgrounds/fondo${numberImg}.png'`
  }

  // getRandomArray(phrases)

  return (
    <div style={appStyle} className="App">
      <h1 className='App__tittle'>Galletas de la fortuna  </h1>
      <div className="App__pathclip">
        <Phrases phrasesRandom={phrasesRandom} />
      </div>
      <Button
        setPhrasesRandom={setPhrasesRandom}
        setNumberImg={setNumberImg}
      />
    </div>
  )
}

export default App
