import express from "express";
import mysql from "mysql";

import cors from "cors";

const app = express();

app.use(cors({
  credentials: true,
  origin: '*',
}));

app.use(express.json());

const db = mysql.createConnection({
    

   host: "cloudproject.cnakm2okvpx0.eu-north-1.rds.amazonaws.com",
 user: "admin",
 password: "La2101_99",
 database: "fpDB",
  /*
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  */
});


app.get("/", (req, res) => {
  res.json("hello");
});


app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      else{
        console.log('books fetches successfully !');
        return res.json(data);
      }
    });
  });

  app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";
  
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      else
      {
        console.log('book created successfully!');
        return res.json(data);
      }    
    });
  });






app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM books WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    else
    {
      console.log('book deleted successfully!');
      return res.json(data);
    }
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    else{
      console.log('book updated successffuly!')
      return res.json(data);
    }
  });
});

app.listen(3010, () => {
  console.log("Connected to backend.");
});

