import React, { useState } from 'react';
import { db } from './config/config';
import { collection, addDoc } from 'firebase/firestore';

const MoviesAdd = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [director, setDirector] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [rating, setRating] = useState(0);
    const [year, setYear] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, 'movies'), {
                title,
                description,
                director,
                imageUrl,
                rating,
                year,
                duration,
            });
            setTitle('');
            setDescription('');
            setDirector('');
            setImageUrl('');
            setRating(0);
            setYear('');
            setDuration('');
        } catch (error) {
            console.error('Error al guardar la película:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Título:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <br />
            <label>
                Descripción:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br />
            <label>
                Director:
                <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
            </label>
            <br />
            <label>
                Imagen (URL):
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </label>
            <br />
            <label>
                Nota (1-5):
                <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(parseInt(e.target.value))} />
            </label>
            <br />
            <label>
                Año:
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
            </label>
            <br />
            <label>
                Duración (min):
                <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </label>
            <br />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default MoviesAdd;
