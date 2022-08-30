import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { editBook } from './booksSlice'

const EditBook = () => {
    const location = useLocation()
    const { id, name, author } = location.state

    const [editedName, setEditedName] = useState('')
    const [editAuthor, setEditAuthor] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const edit = { id, editedName, editAuthor }
        dispatch(editBook(edit))
        navigate('/show-books')
    }

    return (
        <div className="h-screen  mx-10 mt-20 ">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-100 max-w-lg mx-auto pt-12 pb-10 px-10 rounded-lg shadow-lg"
            >
                <h1 className="text-3xl text-center font-bold mb-10 ">
                    Edit Book
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
                        defaultValue={name}
                        onChange={(e) => setEditedName(e.target.value)}
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
                        defaultValue={author}
                        onChange={(e) => setEditAuthor(e.target.value)}
                    />
                </div>

                <div className="text-center">
                    {editedName && editAuthor && (
                        <button
                            type="submit"
                            className="btn btn-primary px-10 mt-10  py-2 rounded-full border-2 border-gray-300 text-green-500 hover:bg-green-500 hover:text-white duration-300 hover:border-gray-50 font-bold "
                        >
                            Edit Book
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default EditBook
