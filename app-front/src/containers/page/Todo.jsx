import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../hooks/Layout";
import { get_todo, todo_created } from "../../redux/actions/todo";

import { connect } from "react-redux";
import TodoCart from "../../components/navigation/todo/TodoCart";

const Todo = ({ get_todo, todos_item, todo_created }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    const { title, description } = formData;
    console.log(todos_item);

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        todo_created(title, description);
        get_todo();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        get_todo();
    }, []);
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
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
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
                                    <h3 className="card-title">
                                        Quick Example
                                    </h3>
                                </div>
                                <form onSubmit={(e) => onSubmit(e)}>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="title"
                                                value={title}
                                                onChange={(e) => onChange(e)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">
                                                Description
                                            </label>
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                name="description"
                                                onChange={(e) => onChange(e)}
                                                value={description}
                                            />
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <TodoCart data={todos_item} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    todos_item: state.Todos.todos_item,
});

export default connect(mapStateToProps, {
    get_todo,
    todo_created,
})(Todo);
