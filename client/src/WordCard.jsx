import React, { useState } from 'react'
import Word from './Word'

function WordCard({ wordArray }) {

    const [index, setIndex] = useState(0)

    const slideLeft = () => {
        console.log('click')

        setIndex(index - 1);
    };

    const slideRight = () => {
        setIndex(index + 1);
    };

    return (


        <div id='parent'>
            <button onClick={slideLeft} className="leftBtn">
                ⬅️
            </button>

            <button onClick={slideRight} className="rightBtn">
                ➡️
            </button>
            <div className="card-container">
                {wordArray.map((word, n) => {
                    let position =
                        n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
                    return <Word key={word.id} english={word.english} spanish={word.spanish} cardStyle={position} />;
                })}
            </div>

        </div>
    )
}

export default WordCard
