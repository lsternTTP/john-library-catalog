import { useEffect, useState } from 'react'
import './Game.css';
import SingleCard from './SingleCard'

const cardImages= [
  {"src": "https://github.com/lsternTTP/john-library-catalog/blob/main/public/images3/Cyborg1.jpg?raw=true", matched: false},
  {"src": "https://github.com/lsternTTP/john-library-catalog/blob/main/public/images3/Farenheit3.jpg?raw=true", matched: false},
  {"src": "https://github.com/lsternTTP/john-library-catalog/blob/main/public/images3/The_City_and_the_Stars_hardcover.jpg?raw=true", matched: false},
  {"src": "https://github.com/lsternTTP/john-library-catalog/blob/main/public/images3/Neuromancer3.jpg?raw=true", matched: false},
  {"src": "https://github.com/lsternTTP/john-library-catalog/blob/main/public/images3/The-caves-of-steel-doubleday-cover.jpg?raw=true", matched: false},
  {"src": "https://github.com/lsternTTP/john-library-catalog/blob/main/public/images3/Ubik.jpg?raw=true", matched: false},
];

export default function Game() {
  const[cards, setCards] = useState([])
  const[turns, setTurns] = useState(0)
  const[choiceOne, setChoiceOne] = useState(null)
  const[choiceTwo, setChoiceTwo] = useState(null)
  const[disabled, setDisabled] = useState(false)


//shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setChoiceOne(null)
    setChoiceTwo(null)

    setCards(shuffledCards)
    setTurns(0)

  }

//handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

// compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo)  {
        setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards =>{
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}

            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {

        setTimeout(() => resetTurn(), 1000)


      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  //reset choices & increase turn
  const resetTurn =() => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns +1)
    setDisabled(false)
  }
   // start a new game automatically
  useEffect(() => {
    shuffleCards()
  }, [])


  return (
    <div className ="Game">
      <div className="Game-header">
      <h1 id="h1Title"> Book Cover<br></br>Memory Game</h1>
        <p>Click on the crystal balls below<br></br>to match the 6 book covers.</p>
      <button id= "but" onClick={shuffleCards}>Start Game</button>
      </div>
    <div className="card-grid">
    {cards.map(card => (

    <SingleCard 
      key={card.id} 
      card={card} 
      handleChoice={handleChoice}
      flipped={card === choiceOne || card === choiceTwo || card.matched}
      disabled={disabled}
      />

    ))}
    </div> 
      <p id="turns">Number of Turns: {turns}</p>
    </div>
  );
}


