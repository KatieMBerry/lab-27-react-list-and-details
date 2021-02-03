import React from 'react';
import PropTypes from 'prop-types';

//function component for presentational items
const CharacterDetail = ({ name, image, status, species }) => (
    <figure>
        <figcaption>{name}</figcaption>
        <img src={image} />
        <figcaption>{status}</figcaption>
        <figcaption>{species}</figcaption>
    </figure>
);

CharacterDetail.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string
};

export default CharacterDetail;
