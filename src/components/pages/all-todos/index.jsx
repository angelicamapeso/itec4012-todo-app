import './styles.css';
import { Todo } from "../../todo";

export const AllTodosPage = () => {
  const todos = [
    { text: 'Walk my dog', date: '10/10/2021', color: 'blue', isComplete: false },
    { text: 'Buy laundry detergent', date: '11/10/2021', color: 'purple', isComplete: false },
    { text: 'Workout', date: '12/10/2021', color: 'red', isComplete: true },
  ];

  return (
    <div className="todos-container">
      {
        todos.map(todo =>
          <Todo
            text={todo.text}
            date={todo.date}
            color={todo.color}
            isComplete={todo.isComplete}
          />
        )
      }
    </div>
  );
}