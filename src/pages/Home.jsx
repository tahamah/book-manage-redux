import React from 'react'

const Home = () => {
    return (
        <section className="h-screen mt-20 mx-10">
            <div className="max-w-3xl  mx-auto rounded-xl bg-gray-200 pt-5">
                <div className=" text-center  text-red-500 text-3xl pb-5">
                    <h1>Welcome To Redux World !</h1>
                </div>
                <div className="bg-gray-500 text-white px-10 py-8 rounded-b-xl">
                    <h2 className="text-lg text-justify">
                        This is a React Redux App. CRUD operation was done
                        successfully by Redux. Full meaning of CRUD is- C =
                        Create, R = Read, U = Update and D = Delete. You can see
                        all of the book list and author name in "Show Books"
                        Route (read). You can create new items of book in "Add
                        Book" Route (create). You can also edit and delete in
                        "Show Books" route by clicking edit and delete button.
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Home
