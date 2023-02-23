import React from "react";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={style.landingContenedor}>
      <div className={style.texto}>
        <h1 className={style.uno}>Bienvenidos a la</h1>
        <h1 className={style.dos}>
          <strong>PokeApi</strong>
        </h1>
        <h1 className={style.tres}> de Moyobear...</h1>
      </div>

      <Link to="/home">
        <button className={style.resplandor}>Empezar</button>
      </Link>
    </div>
  );
}
