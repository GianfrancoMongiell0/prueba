
import '../pages/Styles/SearchBar.css'
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí puedes realizar la lógica de búsqueda con el término ingresado
        console.log('Realizar búsqueda con:', searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchBar;