import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from './CharacterDetail';

const CharacterList = ({ characters }) => {
    const characterElements = characters.map(character => (
        <li key={character.id}>
            <CharacterDetail {...character} />
        </li>
    ));

    return (
        <ul>
            {characterElements}
        </ul>
    );
};

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })).isRequired
};

export default CharacterList;
