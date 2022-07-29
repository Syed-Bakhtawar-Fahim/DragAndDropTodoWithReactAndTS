import React from 'react'
import { Todo } from './Model'
import SingleTodo from './SingleTodo'

import "./style.css"

interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <>
            <div className="todos">
                {
                    todos.map((todo) =>
                        <SingleTodo
                            todos={todos}
                            todo={todo}
                            key={todo.id}
                            setTodos={setTodos}

                        />
                    )
                }
            </div>
        </>
    )
}

export default TodoList