import React from 'react';

const MovieCard = props => {
    const {title, director, metascore, stars, id} = props.movie;
    const navigateToMovie = e => {
        e.preventDefault();
        props
            .history
            .push(`/movies/${id}`);
    };
    return (
        <div className="save-wrapper">
            <div className="movie-card" onClick={navigateToMovie}>
                <h2>{title}</h2>
                <div className="movie-director">
                    Director:
                    <em>{director}</em>
                </div>
                <div className="movie-metascore">
                    Metascore:
                    <strong>{metascore}</strong>
                </div>
                <h3>Actors</h3>

                {stars.map(star => (
                    <div key={star} className="movie-star">
                        {star}
                    </div>
                ))}
            </div>
            <div className="save-button" onClick={props.saveMovie}>Save</div>
        </div>
    );
};

export default MovieCard;
