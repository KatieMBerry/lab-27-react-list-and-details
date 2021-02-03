import React, { Component } from 'react';
import { getCharacterById } from '../services/rickAndMorty';
import CharacterDetail from '../components/characters/CharacterDetail';

//class components for stateful components
export default class SelectedCharacter extends Component {
    state = {
        character: {}
    }

    componentDidMount() {
        getCharacterById(this.props.match.params.id)
            .then(character => this.setState({ character }));
    }

    render() {
        const { character } = this.state;

        return (
            <CharacterDetail {...character} />
        );
    }
}
