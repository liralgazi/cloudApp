import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getBooks } from "../api/api";

const url = 'http://cloud-project-lb-1993630990.eu-north-1.elb.amazonaws.com:3010/books';
// Or, if your server supports HTTPS, use 'https' instead of 'http'
// const url = 'https://cloud-project-lb-1993630990.eu-north-1.elb.amazonaws.com:3010/books';

// Make the XHR request with the full URL
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();
const Books = () => {
  const [books, setBooks] = useState([]);
/*
  const getAllBooks = React.useCallback(async () => {
    try {
      const { data } = await getBooks();

      if (data?.code !== 200) {
        throw new Error();
      }
      setBooks(data);
    } catch (error) {
      return;
    } finally {
    
    }
  }, [books]);

  useEffect(() => {
    getAllBooks();
  }, [getAllBooks]);
*/

useEffect(() => {
  const fetchAllBooks = async () => {
    try {
      //const res = await axios.get('http://16.16.24.178:3010/books');
      const res = await axios.get('cloud-project-LB-1993630990.eu-north-1.elb.amazonaws.com:3010/books');
      setBooks(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  fetchAllBooks();
}, []);

  console.log('books',books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://cloud-project-LB-1993630990.eu-north-1.elb.amazonaws.com:3010/books/${id}`);
      //await axios.delete(`http://16.16.24.178:3010/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>My Books Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>${book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>
        
      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>
  );
};

export default Books;