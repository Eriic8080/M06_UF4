import React from 'react';
import { Link } from 'react-router-dom';

const IndexMenu = () => {
    return (
        <div>
            <button>
                <Link to="/movies/list">Lista de Peliculas</Link>
            </button>
            <button>
                <Link to="/movies/add">Agregar Peliculas</Link>
            </button>
        </div>
    );
};

export default IndexMenu;
