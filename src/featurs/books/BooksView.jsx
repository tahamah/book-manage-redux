import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBook } from './booksSlice'

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }
    return (
        <div className="h-screen">
            <h1 className="text-3xl text-center font-bold mt-20 mb-10">
                Show Books
            </h1>
            <section className=" mx-10">
                <div className="overflow-x-auto max-w-3xl mx-auto shadow-md sm:rounded-lg">
                    <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-6 px-6">
                                    ID
                                </th>
                                <th scope="col" className="py-6 px-6">
                                    Title
                                </th>
                                <th scope="col" className="py-6 px-6">
                                    Author
                                </th>

                                <th
                                    scope="col"
                                    className="py-6 px-6 text-center"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-500 text-gray-100">
                            {books &&
                                books.map((book, index) => {
                                    const { id, name, author } = book
                                    return (
                                        <tr
                                            key={index}
                                            className=" border-b dark:bg-gray-900 dark:border-gray-700"
                                        >
                                            <th
                                                scope="row"
                                                className="py-4 px-6 font-medium whitespace-nowrap dark:text-white"
                                            >
                                                {index + 1}
                                            </th>
                                            <td className="py-4 px-6">
                                                {name}
                                            </td>
                                            <td className="py-4 px-6">
                                                {author}
                                            </td>
                                            <td className="py-4 px-6 text-center">
                                                <Link
                                                    to="/edit-book"
                                                    state={{ id, name, author }}
                                                    className="btn mr-2 btn-primary px-2 rounded border-2 text-yellow-500 border-gray-300  hover:bg-yellow-500 hover:text-white duration-300 hover:border-gray-50 font-bold "
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(id)
                                                    }
                                                    className="btn btn-primary px-2  rounded border-2 border-gray-300 text-red-500 hover:bg-red-500 hover:text-white duration-300 hover:border-gray-50 font-bold "
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default BooksView
