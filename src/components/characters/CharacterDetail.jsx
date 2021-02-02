import React from 'react';
import PropTypes from 'prop-types';

//function component for presentational items
const CharacterDetail = ({ name, species, image }) => (
    <figure>

    </figure>

);

CharacterDetail.propTypes = {
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default CharacterDetail;
