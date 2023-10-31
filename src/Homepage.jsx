import React from "react";
import BookList from "./Booklist";


export default function Homepage() {
    return (
        <div>
            <h1>Welcome to the Philistine Bookshop</h1>
            <p>Discover a world of Books!</p>

            <BookList />

        </div>
    );
}