"use client"

import { useEffect, useState } from "react"

const Todo = () => {
    const [todo, setTodo] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setTodo(result);

        }
        fetchData();
    }, []);

    return (
        <div>
        <h1>{todo ? todo.title : "Loading..."}</h1>
        </div>
    )
}

export default Todo