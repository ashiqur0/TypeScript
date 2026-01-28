const filterByRating = (array: Array<{title: string, rating: number}>) => {
    return array.filter(arr => arr.rating >= 4.0 && arr);
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));