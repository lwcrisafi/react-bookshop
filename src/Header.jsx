import { useContext, useState } from "react";
import CurrencySelection from "./CurrencySelection";
import './Header.scss';
import SearchBox from "./SearchBox";
import Topmenu from "./Topmenu";
import context from "./Context";

function Header({currentPage, setCurrentPage}) {

    const currentMenuItem = 'contact';

     const [value, setValue] = useState("");

     const { state, dispatch } = useContext(context);

     const toggleLanguage = (ev) => {
       dispatch({
         type: "language/set",
         payload: state.language == "en" ? "cz" : "en",
       });
     };

  return (
    <>
      <header className="header">
        <div className="header__sitename">Philistine Bookshop</div>

        <SearchBox value={value} setValue={setValue} />

        <Topmenu
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          currentItem={currentMenuItem}
        />
        <div className="language-switch" onClick={toggleLanguage}>
          Language: {state.language}
        </div>
      </header>
    </>
  );
};

export default Header;
