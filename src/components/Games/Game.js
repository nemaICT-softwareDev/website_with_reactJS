import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchGames} from '../../actions/gameActions';
import "./Game.css"

class Game extends Component {
    componentDidMount() {
        this.props.fetchGames();
    }
    render() {
         //Here we use the map to convert the json pics files into JSX elements
        const games = this.props.games.map( (game) => (
                <div className="col-6 col-xm-12 col-sm-3 col-md-3" key={game.id}>
                     <div className="thumbnail">
                               <a href={game.url}>
                                   <div className={"picTitle"}>{game.title}</div>
                                   <img className={"imageStyle"}  src={`pics/${game.sku}.jpg`} alt={game.title} title={game.url}/>
                             </a><hr/>
                         </div>
                </div>
            )
        )
        return (
            <div className="row">{games} <br/></div>
        );
    }
}
// start browser with default state
const mapStateToProps = (state) => ({
    games: state.games.filteredItems,
   });

export default connect(mapStateToProps, {fetchGames})(Game);