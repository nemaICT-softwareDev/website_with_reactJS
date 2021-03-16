import React, {Component} from 'react';
import { connect } from 'react-redux';
import { filterGames } from "../actions/gameActions";

const selectElStyle = {
    border: '1px solid #6c757d',
    borderRadius: '.50rem'
}
const labelStyle = {
    color: '#6c757d',
}

const rowStyle = {
    marginLeft: '5px',

}

class Filter extends Component {
    render() {
        return (
            <div style={rowStyle} className="row">
                 <div>
                    <label style={labelStyle}> Filter Games
                        <select style={selectElStyle} className="form-control" value={this.props.genre}
                            onChange={(e) => {
                            this.props.filterGames(
                            this.props.games,
                            e.target.value);
                            }}>
                            <option value="">ALL</option>
                            <option value="n">New Games</option>
                            <option value="e">Engineering</option>
                            <option value="f">Fun</option>
                            <option value="m">Math</option>
                            <option value="c">Science</option>
                        </select>
                    </label>
                </div>
              </div>
        );
    }
}

const mapStateToProps = (state) => ({
    games: state.games.items,
    genre: state.games.genre,
});
export default connect(mapStateToProps, {filterGames})(Filter);