import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../hooks/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {

    return (
        <Layout>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Todo</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active">Todo</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Quick Example</h3>
                                </div>
                                <form>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Title</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Description</label>
                                            <textarea type="text" className="form-control" />
                                        </div>

                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="card card-success">
                                <div className="card-header">
                                    <h3 className="card-title">Title Todo</h3>
                                </div>
                                <div className="card-body">

                                    <label htmlFor="exampleInputEmail1">Description</label>
                                    <label htmlFor="exampleInputEmail1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet laborum provident tenetur assumenda labore ducimus et culpa placeat unde, laboriosam mollitia repellendus error rerum molestiae? Repudiandae aliquam minus ipsa! </label>
                                    <br />
                                    <span class="time"><FontAwesomeIcon icon={faClock} /> 12:05</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>

    );
}

export default Todo;