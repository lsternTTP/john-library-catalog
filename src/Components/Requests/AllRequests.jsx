// import './AllRequests.css';
import Request from "./Request.jsx";
// remove-------------------------------------
export default function AllRequests(props) {
  function liftRequestToRemoveHandler(bookToRemove) {
    //call the function received from the App component
    props.removeFromRequestListHandler(bookToRemove);
  }
  return (
    <section id="all-requests-list">
      <h2 id="h2Requests">Requests<p id="Rq">Appear Below:</p></h2>

      {props.requestList.map((thisRequest) => (
        <Request
          id="Request-List-Style"
          //May 9----------------------------
          //Remove------------------------------
          liftRequestToRemoveHandler={liftRequestToRemoveHandler}
          book={thisRequest}
          key={thisRequest.id}
        ></Request>
      ))}
    </section>
  );
}
