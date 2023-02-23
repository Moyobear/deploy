import React from "react";
import { useHistory } from "react-router-dom";
import style from "./Modal.module.css";

export default function Modal({ active, setActive, motivo }) {
  const history = useHistory();
  function closeModal(active) {
    setActive(!active);
    history.push("/home");
  }
  return (
    <div
      className={active ? style.containerFormActive : style.containerForm}
    >
      <div className={style.cont}>
        <h3 className={style.titulo}>
          Se ha {motivo} el pokemon correctamente!
        </h3>
      </div>

      <div className={style.boton}>
        <button className={style.aceptar} onClick={closeModal}>
          Aceptar
        </button>
      </div>
    </div>
  );
}
