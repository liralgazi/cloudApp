import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getBooks } from "../api/api";


const Books = () => {
  const [books, setBooks] = useState([]);


useEffect(() => {
  const fetchAllBooks = async () => {
    try {
      //const res = await axios.get('http://13.53.190.107:3010/books');
      //const res = await axios.get('http://localhost:3010/books');
      const res = await axios.get('http://cloud-project-LB-1993630990.eu-north-1.elb.amazonaws.com:3010/books');
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
      //await axios.delete(`http://13.53.190.107:3010/books/${id}`);
      //await axios.delete(`http://localhost:3010/books/${id}`);

      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>My Book Shop</h1>
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
      <button style={{borderRadius:10, backgroundColor:"#318CE7"}}>
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>
  );
};

export default Books;