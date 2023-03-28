import React from 'react'

const Phrases = ({phrasesRandom}) => {

    return (
        <p className='App__phrases'>{phrasesRandom.quote}</p>
    )
}

export default Phrases

