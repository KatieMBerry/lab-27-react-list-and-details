import React, { Component } from 'react';
import { getCharacters } from '../services/rickAndMorty';
import CharacterList from '../components/characters/CharacterList';


//class components for stateful components
export default class AllCharacters extends Component {
    state = {
        characters: []
    }

    componentDidMount() {
        getCharacters()
            .then(characters => this.setState({ characters }));
    }

    render() {
        const { characters } = this.state;

        return (
            <CharacterList characters={characters} />
        );
    }
}
