//
import React from "react";
//
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
//
class ListTodo extends React.Component {
  state = {
    listTodo: [
      {
        id: "todo1",
        title: "Doing homework",
      },
      {
        id: "todo2",
        title: "CLean house",
      },
      {
        id: "todo3",
        title: "Learn React",
      },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo],
    });
    toast.success("Wow so easy!");
  };
  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.listTodo;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodo: currentTodo,
    });
    toast.success("Delete succeed !");
  };
  handleEditTodo = (todo) => {
    let { editTodo, listTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    // save
    if (!isEmptyObj && editTodo.id === todo.id) {
      let listTodoUpdate = [...listTodo];
      let objIndex = listTodoUpdate.findIndex((item) => item.id === todo.id);
      listTodoUpdate[objIndex].title = editTodo.title;
      this.setState({
        listTodo: listTodoUpdate,
        editTodo: {},
      });
      toast.success("Update todo succeed !");
      return;
    } else {
      // edit
      this.setState({
        editTodo: todo,
      });
    }

    this.setState({
      editTodo: todo,
    });
  };
  handleOnChangeEditTodo = (event) => {
    let updateTodo = { ...this.state.editTodo };
    updateTodo.title = event.target.value;
    this.setState({
      editTodo: updateTodo,
    });
  };
  render() {
    let { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <p>SIMPLE Todo APP with React.js (Hoi Dan IT)</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodo &&
              listTodo.length > 0 &&
              listTodo.map((todo, index) => {
                return (
                  <div className="todo-child" key={todo.id}>
                    {isEmptyObj ? (
                      <span>
                        {index + 1} - {todo.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === todo.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {todo.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(todo)}
                    >
                      {!isEmptyObj && editTodo.id === todo.id ? "Save" : "Edit"}
                    </button>
                    <button
                      onClick={() => this.handleDeleteTodo(todo)}
                      className="delete"
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
