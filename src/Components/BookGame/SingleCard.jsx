// import './SingleCard.css'


export default function SingleCard({ card, handleChoice, flipped, disabled }) {

const handleClick = () => {
  if (!disabled) {
    handleChoice(card)
  }  


}

return (

  <div className="card">

  <div className={flipped ? "flipped" : ""}>
  <img className="front" src={card.src} alt="card front" />
    <img 
      className="back" 
      src="https://github.com/lsternTTP/john-library-catalog/blob/main/public/images3/NewCrystalBall.png?raw=true" 
      onClick={handleClick} 
      alt="card back" />
  </div>
  </div>



)

}
