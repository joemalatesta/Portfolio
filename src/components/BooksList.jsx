import BookCard from "./BookCard.jsx"

function BooksList(props) {
  return(
    <div id="fact-list">
      <h3>Favorite Books</h3>
      <ul className="flex">
        {props.books.map((book, idx )=> 
          <BookCard book={book} key={idx}/>
        )}
      </ul>
    </div>
  )
}

export default BooksList