function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => !book.borrows[0].returned).length;
}

function sortGenre(genre1, genre2) {
  return genre2.count - genre1.count;
}

function getMostCommonGenres(books) {
  const genres = {};
  books.forEach((book) => {
    let { genre } = book;
    if (!genres[genre]) genres[genre] = { name: genre, count: 1 };
    else genres[genre].count++;
  });
  return Object.values(genres).sort(sortGenre).slice(0, 5);
}

function sortByPopularity(item1, item2) {
  return item2.count - item1.count;
}

function getMostPopularBooks(books) {
  const booksWithPopularity = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });
  return booksWithPopularity.sort(sortByPopularity).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const authorsByPop = {};
  authors.forEach(
    (author) =>
      (authorsByPop[author.id] = {
        name: author.name.first + " " + author.name.last,
        count: 0,
      })
  );
  books.forEach(
    (book) => (authorsByPop[book.authorId].count += book.borrows.length)
  );
  return Object.values(authorsByPop).sort(sortByPopularity).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
