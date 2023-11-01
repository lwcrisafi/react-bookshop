import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function BookDetail() {

    const { id } =useParams();
    const[book, setBook] = useState(null);

    const loadBoook = async () => {
        const url =
          "https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=" + id;
          const response = await fetch(url);
          const data = await response.json();


          setBook(data);
    }

    useEffect(() => {
        loadBoook();
    }, [id])


 return (
   <div className="book-detail">
     <h1>Book Details</h1>
     {book ? (
       <>
         <h2>{book.title}</h2>
         <p>{book.price} EUR</p>
       </>
     ) : (
       "Loading..."
     )}
   </div>
 );
}