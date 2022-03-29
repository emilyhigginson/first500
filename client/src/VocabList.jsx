import React from 'react'

function VocabList({wordArray}) {
  return (
    <div>
      <h1>Vocabulary List: </h1>
      <div> {wordArray.map((word) => {
        return <li> {word.english} : {word.spanish} </li>;
      })}
      </div>
      </div>
  )
}

export default VocabList