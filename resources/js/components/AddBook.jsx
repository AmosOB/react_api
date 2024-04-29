import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [formData, setFormData] = useState({
        name: '',
        author: '',
        publish_date: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('/api/books', formData)
        .then((res) => {
            console.log(res);
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
        })
    };
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className='col-md-6'>
                    <div className="card mt-3">
                        <div className="card-body">
                            <h5 className='mb-3'>Edit</h5>
                            <form onSubmit={ handleSubmit }>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        value={ formData.name }
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                                        value={ formData.author }
                                        onChange={(e) => setFormData({...formData, author: e.target.value})}
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
                                        value={ formData.publish_date }
                                        onChange={(e) => setFormData({...formData, publish_date: e.target.value})}
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
  )
}

export default AddBook
