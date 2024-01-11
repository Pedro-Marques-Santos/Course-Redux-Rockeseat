import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

// novo pedaço de Estado
const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Estudar Redux", "teste"],

  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { add } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
