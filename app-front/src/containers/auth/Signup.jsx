import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from 'react-router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { signup } from "../../redux/actions/auth";

const MySwal = withReactContent(Swal)




const Signup = ({
    signup,
    signupRes

}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [requestSent, setRequestSent] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [accountCreated, setAccountCreated] = useState(false)
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        re_password: "",
    });

    const { first_name, last_name, email } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handlePasswords = (name, value) => {
        name === 'password' ? setPassword(value) : setRePassword(value);
        if (rePassword !== '') {
            if (rePassword !== password) {
                setErrorMessage(true);
                return;
            } else {
                setErrorMessage(false);
            }
        }
    }
    const onSubmit = e => {
        e.preventDefault();
        signup(first_name, last_name, email, password, rePassword);
        setAccountCreated(true);
        window.scrollTo(0, 0)
        setRequestSent(true)
    }

    if (requestSent === true) {
        if (signupRes === 'False') {
            MySwal.fire(
                'Algo salio mal',
                'No fue posible crear el usuario',
                'warning'
            )
        } else if (signupRes === 'True') {
            MySwal.fire(
                'Bien Hecho',
                'Se ha creado Esitosamente el usuario',
                'success'
            )
            return <Navigate to="/login" replace={true} />
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
                            Sig Up
                        </span>
                        <div
                            className="wrap-input100 validate-input"
                            data-validate="Enter username"
                        >
                            <input
                                className="input100"
                                type="text"
                                name="first_name"
                                value={first_name}
                                onChange={e => onChange(e)}
                                placeholder="First Name"
                            />
                            <span
                                className="focus-input100"
                                data-placeholder=""
                            />
                        </div>
                        <div
                            className="wrap-input100 validate-input"
                            data-validate="Enter username"
                        >
                            <input
                                className="input100"
                                type="text"
                                name="last_name"
                                value={last_name}
                                onChange={e => onChange(e)}
                                placeholder="Last Name"
                            />
                            <span
                                className="focus-input100"
                                data-placeholder=""
                            />
                        </div>
                        <div
                            className="wrap-input100 validate-input"
                            data-validate="Enter username"
                        >
                            <input
                                className="input100"
                                type="email"
                                name="email"
                                value={email}
                                required
                                onChange={e => onChange(e)}
                                placeholder="Email"
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
                                required
                                onChange={e => handlePasswords(e.target.name, e.target.value)}
                                placeholder="Password"
                            />
                            <span
                                className="focus-input100"
                                data-placeholder=""
                            />
                        </div>
                        <div
                            className="wrap-input100 validate-input"
                            data-validate="Enter password"
                        >
                            <input
                                className="input100"
                                type="password"
                                name="re_password"
                                required
                                value={rePassword}
                                onChange={e => handlePasswords(e.target.name, e.target.value)}
                                placeholder="Re Password"

                            />

                            <span

                                data-placeholder=""
                            />
                            {
                                errorMessage && (<span className="focus-input100">Las contraseñas deben coisidir</span>)
                            }
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
                            <button className="login100-form-btn">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {

    return ({
        signupRes: state.Auth.signupRes
    })
}
export default connect(mapStateToProps, {
    signup
})(Signup);
