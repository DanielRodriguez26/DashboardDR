import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { login } from "../../redux/actions/auth";
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Login = ({ login, user }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const [activated, setActivated] = useState(false);

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault()
        login(email, password)
        setActivated(true)
    }



    if (user) {
        user = user[0]
        if (user['valid'] === true) {
            MySwal.fire({
                title: 'Bien Hecho',
                icon: 'success',
                text: user['message']
            })
            return <Navigate to="/" />
        } else {
            MySwal.fire({
                title: 'Algo paso',
                icon: 'warning',
                text: user['message']
            })
        }
    }

    return (
        <div className="limiter">
            <div
                className="container-login100"
                style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
            >
                <div className="wrap-login100">
                    <form className="login100-form validate-form" onSubmit={e => onSubmit(e)}>
                        <span className="login100-form-logo">
                            <i className="zmdi zmdi-landscape" />
                        </span>
                        <span className="login100-form-title p-b-34 p-t-27">
                            Log in
                        </span>
                        <div
                            className="wrap-input100 validate-input"
                            data-validate="Enter username"
                        >
                            <input
                                className="input100"
                                type="email"
                                name="email"
                                value={email}
                                onChange={e => onChange(e)}
                                placeholder="Username"
                            />
                            <span
                                className="focus-input100"
                                data-placeholder=""
                            />
                        </div>
                        <div
                            className="wrap-input100 validate-input"
                            data-validate="Enter password"
                        >
                            <input
                                className="input100"
                                type="password"
                                name="password"
                                value={password}
                                onChange={e => onChange(e)}
                                placeholder="Password"
                            />
                            <span
                                className="focus-input100"
                                data-placeholder=""
                            />
                        </div>
                        <div className="contact100-form-checkbox">
                            <input
                                className="input-checkbox100"
                                id="ckb1"
                                type="checkbox"
                                name="remember-me"
                            />
                            <label className="label-checkbox100" htmlFor="ckb1">
                                Remember me
                            </label>
                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">Login</button>
                        </div>
                        <div className="text-center p-t-90">
                            <Link className="txt1" to="#">
                                Forgot Password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    user: state.Auth.user,
});
export default connect(mapStateToProps, {
    login,
})(Login);
