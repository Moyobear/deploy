import {
  CLEAR_DETAIL,
  GET_ALL_POKEMONS,
  GET_ALL_TYPES,
  GET_POKEMON_DETAIL,
  CLEAR_HOME,
  UPDATE_HOME,
  SEARCH_BY_NAME,
  DELETE_POKEMON,
  FILTER_TYPE,
  FILTER_ORIGEN,
  ORDEN_ALFABETICO,
  ORDEN_ATAQUE,
  GET_UPDATE_POKEMON,
  CLEAR_UPDATE,
} from "./actions";

const initialState = {
  master: [],
  pokemons: [],
  pokemonsDb: [],
  detail: {},
  update: {},
  types: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        master: action.payload,
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case CLEAR_HOME:
      return {
        ...state,
        pokemons: state.master,
      };
    case UPDATE_HOME:
      return {
        ...state,
        pokemons: [],
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };
    case DELETE_POKEMON:
      const filterDelete = state.pokemons.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        pokemons: filterDelete,
        master: filterDelete,
      };
    case FILTER_TYPE:
      const copyType = [...state.master];
      const filterType =
        action.payload === "all"
          ? state.master
          : copyType.filter((item) => item.type.includes(action.payload));
      return {
        ...state,
        pokemons: filterType,
      };
    case FILTER_ORIGEN:
      const copyOrigen = [...state.master];
      const filterOrigen =
        action.payload === "false"
          ? copyOrigen.filter((item) => !item.inDataBase)
          : action.payload === "true"
          ? copyOrigen.filter((item) => item.inDataBase)
          : state.master;
      return {
        ...state,
        pokemons: filterOrigen,
      };
    case ORDEN_ALFABETICO:
      const copyAlf = [...state.master];
      const filterAlf =
        action.payload === "az"
          ? copyAlf.sort((a, b) => a.name.localeCompare(b.name))
          : copyAlf.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        pokemons: filterAlf,
      };
    case ORDEN_ATAQUE:
      const copyAtaq = [...state.master];
      const filterAtaq =
        action.payload === "menor"
          ? copyAtaq.sort((a, b) => a.attack - b.attack)
          : copyAtaq.sort((a, b) => b.attack - a.attack);
      return {
        ...state,
        pokemons: filterAtaq,
      };
    case CLEAR_UPDATE:
      return {
        ...state,
        update: {},
      };
    case GET_UPDATE_POKEMON:
      const copyUpdate = [...state.master];
      const pok = copyUpdate.find((item) => item.id === action.payload);
      return {
        ...state,
        update: pok,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
