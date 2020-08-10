import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css'

const TodoList = ({todos=[{text: "Hello world"},{text: "Go to the bank"}]}) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}

    </div>
)

export default TodoList;