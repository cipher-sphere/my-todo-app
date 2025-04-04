// // todos = [
// //     {
// //         title:"........",
// //         description:"......."
// //     }
// // ]

// export function Todos({todos}){

    
//     return <div>
//         {
//             todos.map(function(todo){
//                 return <div>
//                     <h1>{todo.title}</h1>
//                     <h2>{todo.description}</h2>
//                     <button>{todo.completed == true ? "Completed":"Mark as complete"}</button>
//                 </div>
//             })
//         }
//     </div>
// }
import { useEffect, useState } from "react";

export function Todos() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/todos")
            .then(res => res.json())
            .then(data => {
                setTodos(data.todos || []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch todos:", err);
                setLoading(false);
            });
    }, []);

    const handleComplete = async (id) => {
        try {
            const res = await fetch("http://localhost:3000/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    completed: true
                })
            });

            if (!res.ok) throw new Error("Failed to update todo");

            alert("Todo marked as complete");

            // Update local todos
            setTodos((prev) =>
                prev.map(todo =>
                    (todo._id || todo.id) === id ? { ...todo, completed: true } : todo
                )
            );
        } catch (err) {
            console.error("Error updating todo:", err);
            alert("Error marking todo as complete");
        }
    };

    if (loading) return <p>Loading todos...</p>;

    return (
        <div>
            {todos.length === 0 ? (
                <p>No todos found.</p>
            ) : (
                todos.map((todo) => {
                    const todoId = todo._id || todo.id;

                    return (
                        <div key={todoId}>
                            <h1>{todo.title}</h1>
                            <h2>{todo.description}</h2>
                            <button
                                onClick={() => {
                                    if (!todo.completed) handleComplete(todoId);
                                }}
                                disabled={todo.completed}
                            >
                                {todo.completed ? "Completed ✅" : "Mark as complete"}
                            </button>
                        </div>
                    );
                })
            )}
        </div>
    );
}
