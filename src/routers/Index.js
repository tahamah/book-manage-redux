import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddBooks from '../featurs/books/AddBooks'
import BooksView from '../featurs/books/BooksView'
import EditBook from '../featurs/books/EditBook'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const Index = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-book" element={<AddBooks />} />
                <Route path="/edit-book" element={<EditBook />} />
                <Route path="/show-books" element={<BooksView />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Index
