import {
    FETCH_GAMES,
    FILTER_GAMES_BY_GENRE,
} from "./types";

// Get the list of games from the json API and return it via the payload
export const fetchGames = () => (dispatch) => {
    fetch("http://localhost:3000/games")
        .then((res) => res.json())
        .catch((err) =>
            fetch("db.json")
                .then((res) => res.json())
                .then((data) => data.games)
        )
        .then((data) => {
            dispatch({ type: FETCH_GAMES, payload: data });
        });
};
// this function wilt filter the games by its genre
export const filterGames = (games, type) => (dispatch) => {
    return dispatch({
        type:FILTER_GAMES_BY_GENRE,
        payload:{
            items:type === '' ? games
                              : games.filter(a => a.genre.indexOf(type.toUpperCase()) >= 0),
        },
    });
};


