import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
 // the false indicates that initial mode is not darkmode...

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  const appClass = isDarkMode ? "App dark" : "App light"
  //if is dark mode, run appdark, else run applight

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
