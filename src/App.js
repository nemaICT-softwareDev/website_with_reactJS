import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HLine from "./components/HLine";


class App extends Component {
    componentDidMount() {
        /**
         * Here we fetch the json API server to get the list of products
         * Check if is there any file in the localStore from previous session to be loaded in the choppingCart
         */
        if(localStorage.getItem("cartItems")){
            this.setState({ cartItems: JSON.parse(localStorage.getItem("cartItems"))});
        }
  }
    render(){
    return (
        /**
         * The <Provider /> makes the Redux store available to any nested components that have
         * been wrapped in the connect() function. Since any React component in a React Redux app can be connected,
         * most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.
         * Normally, you can’t use a connected component unless it is nested inside of a <Provider>.
         */
        <Provider store={store}>

            <div className="container">
                <Header />
                <HLine />
              <div className="row">
                <div className="col-md-8">
                    <Filter />
                    <HLine />
                  <Products />
                </div>
                <div className="col-md-4">
                    <Basket />
                </div>
              </div>
                <Footer />
            </div>

        </Provider>
    );
  }
}

export default App;
