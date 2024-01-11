import { UseAppSelector } from "../store";

export function TodoList() {
  const todos = UseAppSelector((state) => {
    return state.todo;
  });

  return (
    <ul>
      {todos.map((todo, index: number) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
