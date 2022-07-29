import React, { useRef } from 'react'

import "./style.css"


interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<props> = ({ todo, setTodo, handleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className="input"
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur()
            }}
        >
            <input type="input"
                ref = { inputRef }
                className="input__box"
                placeholder='Enter a task'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="input_submit" type='submit'>
                GO
            </button>
        </form>
    )
}

export default InputFeild

/*
There are different method of defining Types Like Props
1. In Old Function declaration method 
const InputFeild = ( {todo, setTodo}: Props ) => {}
2. In Arrow Function
const InputFeild: React.FC<Props> = ({todo, setTodo}) => {}
*/