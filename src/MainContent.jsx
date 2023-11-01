import { useContext } from "react";
import './MainContent.scss'
import CurrencyContext from "./CurrencyContext";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import BookDetail from "./BookDetail";
import SubpageLayout from "./SubpageLayout";


function MainContent({ currentPage }) {

const { currency } = useContext(CurrencyContext);

  return (
    <>
      <main className="main">
        <h1 className="app__headline">Philistine Bookshop</h1>

        <Routes>
                <Route path="/" element={ <Homepage /> } />

                <Route path="/" element={ <SubpageLayout /> }>
                    <Route path="/about-us" element={ <AboutUs /> } />
                    <Route path="/contact-us" element={ <Contact /> } />
                    <Route path="/book/:id" element={ <BookDetail /> } />
                    <Route path="*" element="404: page not found" />
                </Route>
            </Routes>

        {/* previously working below, replaced with React Router above */}

        {/* <p className="app__motto">Where the rest of us go...</p>
        {currentPage === "" ? <h2>Welcome to the Homepage</h2> : ""}
        {currentPage === "about" ? <h2>All About Us</h2> : ""}

        {currentPage === "contact" ? <h2>Contact Us</h2> : ""} */}
      </main>
    </>
  );
};

export default MainContent;




  /* <div>
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
      </div> */
