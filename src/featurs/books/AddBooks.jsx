import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBook } from './booksSlice'

const AddBooks = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const numberOfBooks = useSelector(
        (state) => state.booksReducer.books.length
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        const book = { id: numberOfBooks + 1, name: title, author }
        dispatch(addBook(book))
        navigate('/show-books', { replace: true })
    }
    return (
        <div className="h-screen max-w-7xl mx-auto mt-20 ">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-100 max-w-lg mx-auto pt-12 pb-10 px-10 rounded-lg shadow-lg"
            >
                <h1 className="text-3xl text-center font-bold mb-10 ">
                    Add New Book
                </h1>
                <div>
                    <label className="text-xl font-semibold" htmlFor="title">
                        Title:
                    </label>
                    <input
                        className="border-2 w-full pl-5 mt-2 mb-5 py-2 rounded outline-none"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="example: Quran Er Alo"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label className="text-xl font-semibold" htmlFor="author">
                        Author:
                    </label>
                    <input
                        className="border-2 w-full pl-5 mt-2 py-2 rounded outline-none"
                        type="text"
                        name="author"
                        id="author"
                        placeholder="example: Abdullah"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                <div className="text-center">
                    {title && author && (
                        <button
                            type="submit"
                            className="btn btn-primary px-10 mt-10  py-2 rounded-full border-2 border-gray-300 text-green-500 hover:bg-green-500 hover:text-white duration-300 hover:border-gray-50 font-bold "
                        >
                            Add Book
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default AddBooks
