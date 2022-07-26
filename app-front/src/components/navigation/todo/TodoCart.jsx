import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const TodoCart = (todos_item) => {
    const todos_items = todos_item.data;
    const [isEdit, setIsEdit] = useState(false);

    const handleUpdate = () => {
        setIsEdit(true);
    };

    return (
        <div>
            {todos_items &&
                todos_items !== null &&
                todos_items !== undefined &&
                todos_items.map((todos_item) =>
                    isEdit ? (
                        <div className="col-md-6" key={todos_item.id}>
                            <div className="card card-danger">
                                <div className="card-header">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={todos_item.name}
                                    />
                                </div>

                                <div className="card-body">
                                    <label htmlFor="exampleInputEmail1">
                                        Description
                                    </label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={todos_item.description}
                                    />

                                    <label>{todos_item.description}</label>
                                    <br />
                                    <span className="time">
                                        <FontAwesomeIcon icon={faClock} />{" "}
                                        {todos_item.date_created}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="col-md-6" key={todos_item.id}>
                            <div className="card card-success">
                                <div className="card-header  d-flex p-0">
                                    <h3 className="card-title p-3">
                                        {todos_item.name}
                                    </h3>
                                    <button
                                        type="button"
                                        class="btn bg-warning ml-auto p-2"
                                        onClick={handleUpdate}
                                    >
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                </div>
                                <div className="card-body">
                                    <label htmlFor="exampleInputEmail1">
                                        Description
                                    </label>
                                    <br></br>
                                    <label>{todos_item.description}</label>
                                    <br />
                                    <span className="time">
                                        <FontAwesomeIcon icon={faClock} />{" "}
                                        {todos_item.date_created}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                )}
        </div>
    );
};

export default TodoCart;
