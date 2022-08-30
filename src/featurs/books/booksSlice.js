import { createSlice } from '@reduxjs/toolkit'

const initialBooks = {
    books: [
        { id: 1, name: 'ABC', author: 'John' },
        { id: 2, name: 'DEF', author: 'Moh' },
        { id: 3, name: 'GHI', author: 'Jo' },
        { id: 4, name: 'JKL', author: 'Tak' },
    ],
}

export const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(
                (book) => book.id !== action.payload
            )
        },
        editBook: (state, action) => {
            const { id, editedName, editAuthor } = action.payload
            const isBookExist = state.books.filter((book) => book.id === id)
            if (isBookExist) {
                isBookExist[0].name = editedName
                isBookExist[0].author = editAuthor
            }
        },
    },
})

export const { showBooks, addBook, deleteBook, editBook } = booksSlice.actions
export default booksSlice.reducer
