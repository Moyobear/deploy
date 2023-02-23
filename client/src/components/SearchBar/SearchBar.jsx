import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";
import { searchByName } from "../../redux/actions";

export default function SearchBar() {
  const [request, setRequest] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setRequest(e.target.value.toLowerCase());
  };

  function onSearch(e) {
    e.preventDefault();
    setRequest("");
    dispatch(searchByName(request));
  }

  return (
    <div className={style.busquedaContenedor}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={style.iconSearch}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        className={style.inputSearch}
        type="search"
        value={request}
        onChange={handleChange}
        placeholder="Buscar pokemon..."
      />
      <button className={style.btnSearch} onClick={(e) => onSearch(e)}>
        Buscar
      </button>
    </div>
  );
}
