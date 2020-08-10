export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});

export const MAKE_COMPLETED = 'MAKE_COMPLETED';

export const makeCompleted = text => ({
    type: MAKE_COMPLETED,
    payload: { text },
});