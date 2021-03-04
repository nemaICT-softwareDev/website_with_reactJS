import React, {Component} from 'react';
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from "../actions/productActions";

const selectElStyle = {
    border: '1px solid black'
}
class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 productsFound">
                    {/* Here we display the number of active founded products */}
                    {this.props.filteredProducts.length} products found.
                </div>
                <div className="col-md-4">
                    <label className={"sorting"}> Order by Price
                        <select style={selectElStyle}
                            className="form-control"
                            value={this.props.sort}
                            onChange={(e) => {
                                this.props.sortProducts(
                                this.props.filteredProducts,
                                e.target.value
                                );
                            }}
                        >
                        <option value="">Select</option>
                        <option value="asc">Lowest to highest</option>
                        <option value="desc">Highest to lowest</option>
                    </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label className={"sorting"}> Filter by Type
                        <select style={selectElStyle} className="form-control" value={this.props.size}
                            onChange={(e) => {
                            this.props.filterProducts(
                            this.props.products,
                            e.target.value);
                            }}>
                            <option value="">ALL</option>
                            <option value="n">Nuts</option>
                            <option value="f">flowers</option>
                            <option value="b">Berries</option>
                            <option value="e">Exotic</option>
                        </select>
                    </label>
                </div>
              </div>

        );

    }
}

const mapStateToProps = (state) => ({
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
    size: state.products.size,
    sort: state.products.sort,
});
export default connect(mapStateToProps, {filterProducts, sortProducts})(Filter);