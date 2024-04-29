import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Books = () => {
    const  { id } = useParams();
    const [bookDetails, setBookDetails] = useState([]);

    const fetchBooksDetails = async () => {
        try {
            const response = await axios.get(`/api/books/${id}`);
            const bookDetails =response.data;
            setBookDetails(bookDetails);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBooksDetails();
    }, [id]);

  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className='col-md-6'>
                    <div className="card mt-3">
                        <div className="card-body">
                            <p className="card-text">{bookDetails.name}</p>
                            <p className="card-text">{bookDetails.publish_date}</p>
                            <Link to={ `/books/${bookDetails.id}/edit`}>
                                <button className='btn btn-outline-primary'>edit</button>
                            </Link>
                            <h6 className="card-title fst-italic float-end">{bookDetails.author}</h6>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Books
