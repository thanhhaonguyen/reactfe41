import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completedTodo, filterTodo } from './../../../redux/action/todoAction';

class TodoApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            content: ""
        };
    }

    handleChange = evt => {
        this.setState({
            content: evt.target.value
        })
    }

    addTodo = evt => {
        // goi action toi store de them todo
        this.props.addTodo(this.state.content);
    }

    handleCompleted = toDoId => {
        this.props.completedTodo(toDoId);
    }

    filterTodo = status => {
        // call to action set filter
        this.props.filterTodo(status);
    }

    renderTodo = () => {
        let todoList = [];
        if (this.props.filter === "all") {
            todoList = [...this.props.todolist];
        }
        if (this.props.filter === "completed") {
            todoList = [...this.props.todolist.filter(todo => todo.isCompleted)];
        }
        if (this.props.filter === "active") {            
            todoList = [...this.props.todolist.filter(todo => !todo.isCompleted)]
        }
        return todoList.map((item) => (
            <li
                key={item.id}
                onClick={() => this.handleCompleted(item.id)}
                style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}
            >
                {item.content}
            </li>
        ));
    }

    render() {
        let { todolist } = this.props;
        return (
            <div className="w-25 mx-auto mt-4">
                <h1>Todos</h1>
                <div className="d-flex">
                    <input type="text" className="form-control" value={this.state.content} onChange={evt => this.handleChange(evt)} />
                    <button className="btn btn-success" onClick={evt => this.addTodo(evt)}>Add</button>
                </div>
                <ul className="text-left mt-3">
                    {this.renderTodo()}
                </ul>
                <div className="d-flex">
                    <button type="button" className="btn btn-success mr-3" onClick={() => this.filterTodo("all")}>All</button>
                    <button type="button" className="btn btn-success" onClick={() => this.filterTodo("active")}>Active</button>
                    <button type="button" className="btn btn-success ml-3" onClick={() => this.filterTodo("completed")}>Completed</button>
                </div>
            </div>
        );
    }
}

// lấy state của store về làm props của component
const mapStateToProps = (state) => {
    // state stands for store redux
    return {
        todolist: state.todosReducer.todosList,
        filter: state.todosReducer.filter,
    };
}

// lấy action của store về làm props của component
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (content) => dispatch(addTodo(content)),
        completedTodo: (toDoId) => dispatch(completedTodo(toDoId)),
        filterTodo: (status) => dispatch(filterTodo(status)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);