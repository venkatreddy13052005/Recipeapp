import React from "react";

const Header = ({ onSearchPage, setCurrentPage }) => {
  return (
    <header>
      <h1>YUM BITES 😋🥢</h1>
      <h4>The cutest recipes made with love 💗</h4>
      <nav>
        <button 
          onClick={() => {
            setCurrentPage("search");
            onSearchPage();
          }}
        >
          Home
        </button>
        <button 
          className="save" 
          onClick={() => setCurrentPage("saved")}
        >
          Saved
        </button>
      </nav>
    </header>
  );
};

export default Header;
