function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((firstAcc, secondAcc) => {
    return firstAcc.name.last.toLowerCase() > secondAcc.name.last.toLowerCase()
      ? 1
      : -1;
  });
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (borrow.id === account.id) totalBorrows++;
    });
  });
  return totalBorrows;
}

function getAuthorById(id, authors) {
  return authors.find((author) => author.id === id);
}

function getBooksPossessedByAccount(account, books, authors) {
  const currentlyCheckedBooks = books.filter((book) =>
    book.borrows.some(
      (borrow) => borrow.returned === false && borrow.id === account.id
    )
  );
  return currentlyCheckedBooks.map((book) => {
    return { ...book, author: getAuthorById(book.authorId, authors) };
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
