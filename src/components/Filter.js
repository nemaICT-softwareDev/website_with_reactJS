import React, {Component} from 'react';
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from "../actions/productActions";

class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 productsFound">
                    {/* Here we display the number of active founded products */}
                    {this.props.filteredProducts.length} products found.
                </div>
                <div className="col-md-4">
                    <label className={"sorting"}> Order by
                        <select
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
                    <label className={"sorting"}> Filter size
                        <select className="form-control" value={this.props.size}
                            onChange={(e) => {
                            this.props.filterProducts(
                            this.props.products,
                            e.target.value);
                            }}>
                            <option value="">ALL</option>
                            <option value="x">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
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