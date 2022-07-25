import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aside from "../components/navigation/Aside";

import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <Aside />
            <ToastContainer autoClose={5000} />
            <div className="content-wrapper" style={{ minHeight: "1301.84px" }}>
                {props.children}
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
