import React, { useEffect, useRef, useState } from "react";

import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";

import { searchAnime } from "../../api/animeManga";

import SearchResult from "../SearchResult/SearchResult";

import "./SearchBar.css";

const SearchBar = () => {
  const wrapperRef = useRef();
  const [inputFocus, setInputFocus] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  const { category } = useParams();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setInputFocus(false);
    }
  };

  const getSearchResult = (event) => {
    event.preventDefault();
    searchAnime(category || "anime", event.target[0].value, 3)
      .then((result) => {
        setSearchResult(result.data);
      })
      .catch((err) => console.log(err));
  };

  const closeSearchHandler = () => {
    setInputFocus(false);
  };

  return (
    <form
      onSubmit={(event) => getSearchResult(event)}
      ref={wrapperRef}
      className={`flex-center search-bar`}
      onFocus={() => setInputFocus(true)}
    >
      <input type="text" />
      <button style={{ background: "none", border: "none", padding: "0" }}>
        <Icon icon="material-symbols:search" />
      </button>
      {inputFocus && searchResult && (
        <SearchResult
          closeSearchHandler={closeSearchHandler}
          results={searchResult}
        />
      )}
    </form>
  );
};

export default SearchBar;
