import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const [bookDetails, setBookDetails] = useState({});
    const [formData, setFormData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchBooksDetails = async () => {
        try {
            if (id) {
                const response = await axios.get(`/api/books/${id}`);
                const bookData = response.data;
                setBookDetails(bookData);
                setFormData({
                    name: bookData.name,
                    author: bookData.author,
                    publish_date: bookData.publish_date
                });
            }

        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        fetchBooksDetails();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/update/${id}`, formData)
        .then((res) =>{
            navigate('/');
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className='col-md-6'>
                    <div className="card mt-3">
                        <h4 className='text-center mt-2'>Edit</h4>
                        <div className="card-body">
                            <form onSubmit={ handleSubmit }>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        value={ formData.name || '' }
                                        onChange={ handleInputChange }
                                        className="form-control bg-white"
                                        id="name"
                                        placeholder="name"
                                        autoComplete="name"/>
                                    <label
                                        htmlFor="floatingInput"
                                    >
                                        Name
                                    </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        name="author"
                                        value={ formData.author || '' }
                                        onChange={ handleInputChange }
                                        className="form-control bg-white"
                                        id="author"
                                        placeholder="author"
                                        autoComplete="author"/>
                                    <label
                                        htmlFor="floatingInput"
                                    >
                                        Author
                                    </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="date"
                                        name="publish_date"
                                        value={ formData.publish_date || '' }
                                        onChange={ handleInputChange }
                                        className="form-control bg-white"
                                        id="publish_date"
                                        placeholder="publish_date"
                                        autoComplete="publish_date"/>
                                    <label
                                        htmlFor="floatingInput"
                                    >
                                        Publish Date
                                    </label>
                                </div>
                                <br />
                                <button type='submit' className='btn btn-outline-primary'>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditBook;
