import { useState, useEffect } from "react";
import WordCard from "./WordCard";
import VocabList from "./VocabList";
import Header from "./Header";
import "./style.css";



function App() {
const [wordArray, setWordArray] = useState([])

  useEffect(() => {
    fetch("/words")
      .then((r) => r.json())
      .then((data) => setWordArray(data));}
      , []);

  return (
    <div className="App">
      <Header/>
     <WordCard wordArray ={wordArray} />
     <VocabList wordArray={wordArray} />
    </div>
  );
}

export default App;