import React, { Component } from "react";
import { Provider } from "react-redux";
import Games from "./components/Games";
import Filter from "./components/Filter";
import store from "./store";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import HLine from "./components/HLine";


const picsStyle = {
    paddingLeft: '0.625rem',
    paddingRight: '0.625rem'
}

class App extends Component {
    componentDidMount() {
        /**
         * Here we fetch the json API server to get the list of pics
         * Check if is there any file in the localStore from previous session to be reloaded in the choppingCart
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
              <div style={picsStyle} className="row">
                  <div>
                        <Filter />
                        <HLine />
                        <Games />
                  </div>
              </div>
                <HLine />
                <Footer />
            </div>
        </Provider>
    );
  }
}

export default App;
