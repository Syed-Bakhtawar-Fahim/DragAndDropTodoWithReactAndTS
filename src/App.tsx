import React, { useState } from 'react';
import './App.css';
import InputFeild from './Component/InputFeild';
import { Todo } from './Component/Model';
import TodoList from './Component/TodoList';



// Declaration
// Data type in TS 

// String
let name: string;
name = "Hello World"

// Number
let age: number;
age = 5

/* If we want to declare both type like number or string in one variable than we will use union operator 
donated by "|" 
*/
let ageString: number | string;
ageString = "Hello"
// ageString = 5

// Boolean
let isStudent: boolean;
isStudent = false

// Array
let hobbies: string[]
hobbies = ["Name", 'Hello']

// Tuple
let role: [number, string]
role = [5, "Hello World"]

/* 
If we want to asign any value to variable(not restricted) than we could use "any" type
It can take any type
Not Recommeded
*/
let anyType: any;

/* 
Instead of any there is an better way "unknown" type
It can also take any type
*/
let unknownType: unknown

// Objects --> Two ways to declare an objects but only one is recommeded
let persons: Object;  // Not Recommeded

/* 
What is Type?
What is Allias?
Allias is of two type one is 
1. type
2. interface
*/

type Person = {
  name: string,
  age: number
  // age?: number --> If we want this property as an optional so we will use "?" t assign 
}

let person: Person = {
  name: "Hello",
  age: 5
}

// Array of Person Object
let lotOfPeople: Person[];


// Function --> Two ways to define a function 
// let printName: Function;  --> Not Recommeded

/* 
void --> return undefined
never --> doesnot return any thing
*/
let printNameVoid: (name: string) => void;
let printNameNever: (name: string) => never;

/* Any return type 
let printName: (name:string) => number;
let printName: (name:string) => string;
*/


/* 
What is Type?
What is Aliases?
Allias is of two type one is 
1. type
2. interface
*/



type PersonType = {
  name: string,
  age: number
  // age?: number --> If we want this property as an optional so we will use "?" t assign 
}
interface PersonInterface {
  name: string,
  age: number
  // age?: number --> If we want this property as an optional so we will use "?" t assign 
}

interface Guy {
  profession: string
}

// Inheritance concept
interface Guy extends PersonInterface {
  profession: string
}

// If we inheritance the type properties in interface
type X = PersonInterface & {
  a: string,
  b: number
}

// If we inheritance the interface properties in type
interface PersonInterface extends PersonType {
  name: string,
  age: number
}


const App: React.FC = () => {

  /* 
  const [todo, setTodo] = useState<string[]>([])
  const [todo, setTodo] = useState<number> ()
  const [todo, setTodo] = useState<number | string> ()

  Event Types:
  There are different event types available go, search and use it.
  but one of best is "React.FormEvent" and one important things we must also declare it on interface 
  otherwise we got an error
  */

  const [todo, setTodo] = useState<string> ("")
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };



  console.log(todos)
  

  return (
    <>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputFeild todo = { todo } setTodo = { setTodo } handleAdd = {handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
