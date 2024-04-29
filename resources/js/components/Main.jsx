import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './Books';
import EditBook from './EditBook';
import AddBook from './AddBook';

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = { <Home/> } />
                <Route path='/books/:id' element = { <Books/> } />
                <Route path='/books/:id/edit' element={<EditBook />} />
                <Route path='/books/post' element={<AddBook />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <Main />
        </React.StrictMode>
    )
}
