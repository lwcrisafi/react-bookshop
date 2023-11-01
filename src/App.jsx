import { useReducer, useState } from "react";
import './App.scss'
import Header from './Header'
import MainContent from './MainContent'
import CurrencyContext from "./CurrencyContext";
import context from "./Context";
import reducer from "./reducer";
import Homepage from "./Homepage";
import CurrencySelection from "./CurrencySelection";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [user, setUser] = useState(null);

  const [contextValue, setContextValue] = useReducer(reducer, {
    user: null,
    theme: "light",
    language: "en",
    currency: "USD",
    authHash: null,
    shoppingCart: [],
  });

  return (
    <BrowserRouter>
      <context.Provider
        value={{ state: contextValue, dispatch: setContextValue }}
      >
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
          <div className="app">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <MainContent
              currentPage={currentPage}
              user={user}
              setUser={setUser}
            />
          </div>
        </CurrencyContext.Provider>
        <div>
          <CurrencySelection />
        </div>
        <Homepage />
      </context.Provider>
    </BrowserRouter>
  );
}

export default App
