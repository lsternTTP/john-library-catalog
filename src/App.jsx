import "./App.css";
import AllBooks from "./Components/Catalog/AllBooks.jsx";
import AllRequests from "./Components/Requests/AllRequests.jsx";
import database from "../BookData.json";
import { useState } from "react";
import Game from './Components/BookGame/Game'

export default function App() {
  const [myRequests, setMyRequests] = useState([]);
  console.log("requests", myRequests);
  const [myBooks, setMyBooks] = useState(database.catalog);
  console.log("books list", myBooks);

  function addToRequestListHandler(bookToAdd) {
    setMyRequests(() => {
      return [...myRequests, bookToAdd];
    });
  }

  //-------Removing
  function removeFromRequestListHandler(bookToRemove) {
    setMyRequests(() => {
      return myRequests.filter((book) => book.id !== bookToRemove.id);
    });
  }
  //--------Search

  //1. Search Functionability
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredBooks, setFilteredBooks] = useState(myBooks);
//handleSearch--This function is called when the user types in the search input. It updates the searchTerm state with the input value and then triggers the filterBooks function.
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterBooks();
  };


  //handleSearchSubmit--This function is called when the user submits the search form. It prevents the default form submission behavior and also triggers the filterBooks function.
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    filterBooks();
  };
//2. Filtering Books
  //filterBooks: This function filters the myBooks list based on the search term entered by the user.
  //It filters the books based on whether the title, author, language, or description of each book includes the search term (case-insensitive).

  const filterBooks = () => {
    const filtered = myBooks.filter((book) => {
      const { title, author, language, description } = book;
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        language.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    //The filtered books are then stored in the filteredBooks state
    setFilteredBooks(filtered);
  };

  return (
    <main>
      <div id="top">
        <h1 id="h1">Prophetic Sci-Fi Novels</h1>
      </div>
      <h3 id="h3">
        Everything in Catalog Contains Previously Non-existent Tech That
        Was Later Invented.
      </h3>
      {/* 3. Rendering the Searchbar */}
	{/* The input field updates the searchTerm state on change */}
      <form id="searchForm" onSubmit={handleSearchSubmit}>
        <label htmlFor="searchInput">Search:</label>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Enter search terms here..."
          onChange={handleSearch}
          value={searchTerm}
        />
        <button id="Sbut" type="submit">
          Search
        </button>
        {/* The form submission triggers the search filter.  */}
      </form>
      <section id="books-and-requests">
{/* 4.	Displaying Results: */}
        {/* The component renders the filteredBooks list with the AllBooks component, displaying the books that match the search criteria. */}
        <AllBooks
          /* Search---------- */
          bookList={filteredBooks}
          addToRequestListHandler={addToRequestListHandler}
        ></AllBooks>
        {/* The AllRequests component displays the list of user requests, allowing for adding or removing books from the list. */}
        <AllRequests
          requestList={myRequests}
          //---Removing
          removeFromRequestListHandler={removeFromRequestListHandler}
        ></AllRequests>
        <Game> </Game>
      </section>

       <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
    </main>
  );
}
