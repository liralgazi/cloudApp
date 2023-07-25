import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
    console.log(book);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
     // await axios.post("http://localhost:3000");
      //await axios.post("http://13.53.190.107:3010/books", book);
      await axios.post("http://cloud-project-LB-1993630990.eu-north-1.elb.amazonaws.com:3010/books", book);
      
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  

  return (
    <div className="form" style={{
      backgroundImage: "url(/../../addbook.png)",
      height: 800,
      width: 1400,
      backgroundSize: "cover",
      backgroundRepeat:"no-repeat"

    }}>
      <h1>Add New Book</h1>
      <div>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
        style={{borderRadius:5}}
      />
      </div>
      <div>
      <input
        rows={5}
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
        style={{borderRadius:5}}
      />
      </div>
      <div>
      <input
        type="number"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
        style={{borderRadius:5}}
      />
      </div>
      <div>
      <input
        type="text"
        placeholder="Book cover"
        name="cover"
        onChange={handleChange}
        style={{borderRadius:5}}
      />
      </div>
      <div>
      <button onClick={handleClick} style={{borderRadius:10, backgroundColor:"#318CE7"}}>Add</button>
      {error && "Something went wrong!"}
    
      </div>
      <div><Link to="/">See all books</Link></div>
      <div>
      
      </div>
     
    </div>
  );
};
export default Add;