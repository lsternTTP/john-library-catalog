import "./Book.css";

export default function Book(props) {
  function clickRequestHandler() {
    props.liftBookToAppHandler(props.book);
  }
  return (
    <div className="book-card">
      <img src={props.book.img}></img>
      <h2>{props.book.title}</h2>
      <h3 id="author">{props.book.author}</h3>
      <p id="published">
        Published {props.book.yearPublished} in {props.book.language}
      </p>
      <p>{props.book.description}</p>
      <p id="forecast">{props.book.forecast}</p>
      <button id="but3" onClick={clickRequestHandler}>Request Book</button>
    </div>
  );
}
