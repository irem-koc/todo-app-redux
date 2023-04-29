import { createSlice, nanoid } from "@reduxjs/toolkit";
export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        activeFilter: "all",
    },
    reducers: {
        addTodo:{
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: ({ title }) => {
                return {
                    payload: {
                        completed: false,
                        title,
                        id: nanoid(),
                    },
                };
            },
        },
        toggle: (state, action) => {
            const { id } = action.payload;
            const item = state.items.find((item) => item.id === id);
            item.completed = !item.completed;
        },
        deleteItem: (state, action) => {
            const id = action.payload;
            const item = state.items.filter((item) => item.id !== id);
            state.items = item;
        },
        changeActiveFilter: (state, action) => {
            const active = action.payload;
            state.activeFilter = active;
        },
        clearCompleted: (state, action) => {
            const item = state.items.filter((item) => !item.completed);
            state.items = item;
        },
    },
});
export const {
    addTodo,
    toggle,
    deleteItem,
    changeActiveFilter,
    clearCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;
