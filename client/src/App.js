import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            savedList: []
        };
    }

    addToSavedList = movie => {
        const savedList = this.state.savedList;
        const found = savedList.find(m => movie.id === m.id);
        if(!found) {savedList.push(movie);
        this.setState({savedList});
        } else {
          alert('Already added that movie brah...')
        }
    };

    render() {
        return (
            <div>
                <SavedList list={this.state.savedList}/>
                <Route exact path='/' component={MovieList}/>
                <Route
                    exact
                    path='/movies/:id'
                    render={props => <Movie {...props} addToSavedList={this.addToSavedList}/>}/>
            </div>
        );
    }
}
