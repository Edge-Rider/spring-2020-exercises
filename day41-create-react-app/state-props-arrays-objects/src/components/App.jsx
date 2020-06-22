import React from "react";
import Button from "./Button";
import Text from "./Text";

class App extends React.PureComponent {
  // initialize the state `showBookAlreadyRead` is set to false
  state = {
    showBookAlreadyRead: false,
  };
  render() {
    // create a new variable and assing to it an array of objects with properties `title`, `author` and `alreadyRead`
    const books = [
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        alreadyRead: true,
      },
      {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        alreadyRead: false,
      },
      {
        title: "Einstein",
        author: "Walter Isaacson",
        alreadyRead: false,
      },
    ];

    // filter an array of books based on it's property `alreadyRead` if it equals to actual state, so we can display only the books that are read or not yet
    const booksToShow = books.filter(
      (book) => book.alreadyRead === this.state.showBookAlreadyRead
    );
    return (
      <div className="App">
        <Button
          text={
            this.state.showBookAlreadyRead
              ? "Show books I need to read"
              : "Show books I have already read"
          }
          onClick={() =>
            this.setState({
              showBookAlreadyRead: !this.state.showBookAlreadyRead,
            })
          }
        />
        {/** iterate through the filterd array of books */}
        {booksToShow.map((book, index) =>
          this.state.showBookAlreadyRead ? (
            <Text
              text={`I have already read ${book.title} by ${book.author}! `}
            />
          ) : (
            <Text
              text={`I still need to read ${book.title} by ${book.author}! `}
            />
          )
        )}
      </div>
    );
  }
}

export default App;
