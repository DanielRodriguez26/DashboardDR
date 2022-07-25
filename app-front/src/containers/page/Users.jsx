import { Link } from "react-router-dom";
import Layout from "../../hooks/Layout";

const Users = () => {

    return (
        <Layout>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>User</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active">Users</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Condensed Full Width Table</h3>
                                </div>
                                <div className="card-body p-0">
                                    <table className="table table-sm">
                                        <thead>
                                            <tr>
                                                <th style={{ width: 10 }}>DNI</th>
                                                <th>Name</th>
                                                <th>Progress</th>
                                                <th style={{ width: 40 }}>Email</th>
                                                <th style={{ width: 40 }}>Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1.</td>
                                                <td>Update software</td>
                                                <td>
                                                    <div className="progress progress-xs">
                                                        <div className="progress-bar progress-bar-danger" style={{ width: '55%' }} />
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-danger">55%</span></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );

}

export default Users;