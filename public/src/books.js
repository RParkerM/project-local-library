//This file completes following requirements:
//  Arrow functions, Spread operator
//  Array Methods: map, find

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const notReturnedBooks = [];
  const returnedBooks = [];
  books.forEach((book) => {
    if (book.borrows[0].returned === true) returnedBooks.push(book);
    else notReturnedBooks.push(book);
  });
  return [notReturnedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      return {
        ...accounts.find((account) => account.id === borrow.id),
        returned: borrow.returned,
      };
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
