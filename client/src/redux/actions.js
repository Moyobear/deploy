import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const DELETE_POKEMON = "DELETE_POKEMON";
export const CLEAR_HOME = "CLEAR_HOME";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const FILTER_TYPE = "FILTER_TYPE";
export const FILTER_ORIGEN = "FILTER_ORIGEN";
export const ORDEN_ALFABETICO = "ORDEN_ALFABETICO";
export const ORDEN_ATAQUE = "ORDEN_ATAQUE";
export const GET_UPDATE_POKEMON = "GET_UPDATE_POKEMON";
export const CLEAR_UPDATE = "CLEAR_UPDATE";
export const UPDATE_HOME = "UPDATE_HOME";

export const getAllPokemons = () => {
  return async function (dispatch) {
    const apidata = await axios.get("http://localhost:3001/pokemons");
    const pokemons = apidata.data;
    dispatch({ type: GET_ALL_POKEMONS, payload: pokemons });
  };
};

export const getPokemonDetail = (id) => {
  return async function (dispatch) {
    const apidata = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const detail = apidata.data;
    dispatch({ type: GET_POKEMON_DETAIL, payload: detail });
  };
};

export const getAllTypes = () => {
  return async function (dispatch) {
    const apidata = await axios.get("http://localhost:3001/types");
    const types = apidata.data;
    dispatch({ type: GET_ALL_TYPES, payload: types });
  };
};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
    payload: {},
  };
};

export const deletePokemon = (id) => {
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/pokemons/${id}/delete`);
    dispatch({ type: DELETE_POKEMON, payload: id });
  };
};

export const clearHome = () => {
  return {
    type: CLEAR_HOME,
  };
};

export const searchByName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    const detail = apiData.data;
    dispatch({ type: SEARCH_BY_NAME, payload: detail });
  };
};

export const filterType = (value) => {
  return {
    type: FILTER_TYPE,
    payload: value,
  };
};

export const filterOrigen = (value) => {
  return {
    type: FILTER_ORIGEN,
    payload: value,
  };
};

export const ordenAlfabetico = (value) => {
  return {
    type: ORDEN_ALFABETICO,
    payload: value,
  };
};

export const ordenAtaque = (value) => {
  return {
    type: ORDEN_ATAQUE,
    payload: value,
  };
};

export const updateHome = () => {
  return {
    type: UPDATE_HOME,
  };
};

export const getUpdatePokemon = (id) => {
  return {
    type: GET_UPDATE_POKEMON,
    payload: id,
  };
};

export const clearUpdate = () => {
  return {
    type: CLEAR_UPDATE,
  };
};
