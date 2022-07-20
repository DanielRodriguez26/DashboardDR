import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import Error404 from "./containers/errors/Error404";

import Login from "./containers/auth/Login";
import Signup from "./containers/auth/Signup";
import Activate from "./containers/auth/Activate";

import Shop from "./containers/Shop";
import ProductDetail from "./containers/pages/ProductDetail";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="*" element={<Error404 />} />

                    {/*Autentication*/}
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route
                        exact
                        path="/activate/:uid/:token"
                        element={<Activate />}
                    />

                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/shop" element={<Shop />} />
                    <Route
                        exact
                        path="/product/:productId"
                        element={<ProductDetail />}
                    />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
