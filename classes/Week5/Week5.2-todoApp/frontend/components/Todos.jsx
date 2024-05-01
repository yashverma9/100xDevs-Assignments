export function Todos({ todos }) {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div>
                        <p>{todo.title}</p>
                        <p>{todo.description}</p>
                        <button>{todo.done ? "Done" : "Mark as done"}</button>
                    </div>
                );
            })}
        </div>
    );
}
