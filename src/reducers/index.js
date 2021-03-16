import gameReducer from './gameReducer';
import { combineReducers } from "redux";


export default combineReducers({
    games: gameReducer
})