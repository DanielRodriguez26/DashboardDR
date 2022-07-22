import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import Error404 from "./containers/errors/Error404";
import Users from "./containers/Users";
import Login from "./containers/auth/Login";
import Signup from "./containers/auth/Signup";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="*" element={<Error404 />} />
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/user" element={<Users />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
