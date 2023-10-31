import { useContext } from "react";
import './MainContent.scss'
import LoginForm from "./LoginForm";
import CurrencyContext from "./CurrencyContext";
import CurrencySelection from "./CurrencySelection";
import Homepage from "./Homepage";
import BookList from "./Booklist";


function MainContent({ currentPage }) {

const { currency } = useContext(CurrencyContext);

  return (
    <>
      <main className="main">
        <h1 className="app__headline">Philistine Bookshop</h1>
        <p className="app__motto">Where the rest of us go...</p>
        {currentPage === "" ? <h2>Welcome to the Homepage</h2> : ""}
        {currentPage === "about" ? <h2>All About Us</h2> : ""}

        {currentPage === "contact" ? <h2>Contact Us</h2> : ""}
      </main>
      {/* <div>
        <Homepage />
      </div>
      <div>
        <CurrencySelection />
      </div>

      <div className="main-content">
        <br /><br /><br /><br /><br /><br /><br />
        <h1 className="main-content__headline"> </h1>
        {user ? (
          <div>
            <p>Welcome, {user.name}!</p>
            <button onClick={() => setUser(null)}>Logout</button>
          </div>
        ) : (
          <LoginForm setUser={setUser} />
        )}
      </div> */}
    </>
  );
};

export default MainContent;