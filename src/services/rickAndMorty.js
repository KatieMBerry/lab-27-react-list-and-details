export const getCharacters = () => {
    return fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(json => json.results);
};

export const getCharacterById = (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json());
};
