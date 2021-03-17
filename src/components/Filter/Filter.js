import React, {Component} from 'react';
import { connect } from 'react-redux';
import { filterGames } from "../../actions/gameActions";

const selectElStyle = {
    border: '1px solid #6c757d',
    borderRadius: '.50rem',
    width: '14rem',
    height: '4rem',
    fontSize: '1.3rem',
    color: '#1c87c9',
    backgroundColor: '#eee'
}
const labelStyle = {
    color: '#f3f4f5',
    fontSize: '1em',
    textAlign: 'center'

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