import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction,} from "../hooks/useAction";
import {} from "../store/action-creators/todo";

export const TodoList: React.FC = () => {
    const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo);
    const {fetchTodos, setTodoPage} = useAction();

    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            <div style={{display: "flex"}}>
                {pages.map(p =>
                    <div
                        key={p}
                        onClick={() => setTodoPage(p)}
                        style={{
                            border: p === page ? '3px solid black' : '1px solid gray',
                            padding: 10,
                            cursor: "pointer"
                        }}
                    >
                        {p}
                    </div>)}
            </div>

        </div>
    )
};