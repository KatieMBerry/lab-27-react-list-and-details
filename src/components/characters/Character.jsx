import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//function component for presentational items
const Character = ({ name, image, id }) => (
    <Link key={id} to={`/characters/${id}`}>
        <figure>
            <img src={image} />
            <figcaption>{name}</figcaption>
        </figure>
    </Link>
);

Character.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Character;

