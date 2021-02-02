import React from 'react';
import PropTypes from 'prop-types';

//function component for presentational items
const CharacterDetail = ({ name, image }) => (
    <figure>
        <img src={image} />
        <figcaption>{name}</figcaption>
    </figure>

);

CharacterDetail.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default CharacterDetail;
