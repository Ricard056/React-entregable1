import getRandomArray from '../utils/getRandomArray'
import phrases from '../utils/phrases.json'

const Button = ({ setPhrasesRandom, setNumberImg }) => {

  const handleChangePhrases = () => {
    const newPhrases = getRandomArray(phrases);
    setPhrasesRandom(newPhrases);
    setNumberImg(getRandomArray([1, 2, 3, 4]));
  }

  return (
    <button className='App__btn' onClick={handleChangePhrases}>Ver otro</button>
  )

}

export default Button