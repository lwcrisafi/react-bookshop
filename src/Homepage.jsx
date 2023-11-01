import React from "react";
import BookList from "./Booklist";


export default function Homepage() {
    return (
        <div>
            <h1>Welcome to the Philistine Bookshop</h1>
            <p>Where everyone is welcome!</p>

            <BookList />

        </div>
    );
}