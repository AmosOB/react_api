import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [deleted, setDeleted] = useState(true);

    const fetchBooks = async () => {
        try {
            const response = await axios.get(`/api/books`)
            const books =response.data;
            setBooks(books);

        } catch (error) {
            console.log(error);

        }
    };

    useEffect(() => {
        if(deleted){
            setDeleted(false);
        }
        fetchBooks();
    },[deleted]);

    const handleDelete = (id) => {
        axios.delete(`/api/delete/${id}`)
        .then((res) => {
            setDeleted(true);
        })
        .catch((err) =>{
            console.log(err);
        })
    };
    return (
            <div className="container">
                <div className="row justify-content-center">
                    <h4 className='text-center mt-3'>Collection of Books and Authors</h4>
                    <Link to={ `/books/post`}>
                        <button type='button' className='btn btn-primary'>New Entries</button>
                    </Link>
                        {books.map(book => (
                            <div key={book.id} className="col-md-4">
                                <div className="card mt-3" style={{ width: '18rem'}}>
                                        <div className="card-body">
                                            <p className="card-text">{book.name}</p>
                                            <p className="card-text fw-light">{book.publish_date}</p>

                                            <div className='row'>
                                                    <div className="col">
                                                        <h5 className="card-title fst-italic float-end">{book.author}</h5>
                                                    </div>
                                                </div>
                                                <div className='row mb-3 float-end'>
                                                    <div className="col">
                                                        <Link to={ `/books/${book.id}`}>
                                                            <button className='btn btn-outline-primary'>Details</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='row float-end mx-2'>
                                                    <div className="col">
                                                        <Link to={ `/books/${book.id}/edit`}>
                                                            <button className='btn btn-outline-primary'>edit</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className='row mx-2'>
                                                    <div className="col">
                                                            <button
                                                                className='btn btn-outline-danger'
                                                                onClick={() => handleDelete(book.id)}
                                                            >
                                                                Delete
                                                            </button>
                                                    </div>
                                                </div>
                                        </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
    );
}

export default Home;
