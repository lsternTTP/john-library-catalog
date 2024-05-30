// import './Request.css';

// Remove--------------------------------------------
export default function Request(props) {
  function clickRemoveRequestHandler() {
    props.liftRequestToRemoveHandler(props.book);
  }

  return (
    <div id="myRequestStyle">
      <p>{props.book.title}</p>
      <img src={props.book.img}></img>
      <p id="aut">{props.book.author}</p>
      {/* Remove------------------------------------ */}
      <button id="but" onClick={clickRemoveRequestHandler}>
        Remove
      </button>
    </div>
  );
}
