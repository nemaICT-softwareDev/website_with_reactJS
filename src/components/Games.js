import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchGames} from '../actions/gameActions';

const gameStyle = {
    fontFamily: 'Apple Color Emoji", "Font Awesome\ 5 Free", "serif',
    paddingTop: '5px',
    paddingBottom: '2px',
    position: 'relative',
    marginBottom: '2%',
    textDecorationColor: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase'
}

const imageStyle = {
    borderRadius: '.75rem'
}

const thumbnailStyle = {
    backgroundColor: '#faf4d2',
    /*boxShadow: '2px 1px 1px #666',*/
    border: '1px solid #6c757d',
    borderRadius: '.75rem',

}

class Games extends Component {
    componentDidMount() {
        this.props.fetchGames();
    }
    render() {
         //Here we use the map to convert the json pics files into JSX elements
        const games = this.props.games.map( (game) => (
                <div className="col-4 col-sm-4 col-md-4  pics" key={game.id}>
                     <div style={thumbnailStyle} className="thumbnail">
                               <a href={game.url}>
                                 <div style={gameStyle}>{game.title}</div>
                                   <img style={imageStyle} src={`pics/${game.sku}.jpg`} alt={game.title} title={game.url}/>
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

export default connect(mapStateToProps, {fetchGames})(Games);