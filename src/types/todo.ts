export interface TodoState {
    todos: any[];
    loading: boolean;
    error: string | null;
    page: number; //pagination
    limit: number; //pagination
}

export enum TodoActionTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS,
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS,
    payload: any[],
}

interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR,
    payload: string,
}

interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: number,
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPage;