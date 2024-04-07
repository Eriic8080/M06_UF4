import React from 'react';

const Boton = ({ text, onClick, esClick }) => {
  const btnClass = esClick ? 'btnClick' : 'btnReiniciar';
  
  return (
    <button className={btnClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Boton;
