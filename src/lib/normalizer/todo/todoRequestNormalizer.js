
export const normalizeTodoData = (todos) => {
    let newTodos = todos.map(todo => {
        return {
            ...todo,
            isDisabled: false,
            isEditing: false
        }
    })
    return newTodos;
}