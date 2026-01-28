interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean,
}

const printBookDetails = (book: Book): string => {
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`;
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true
};

console.log(printBookDetails(myBook));