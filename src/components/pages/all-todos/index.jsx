import './styles.css';
import { Todo } from "../../todo";
import { useContext, useEffect, useState } from 'react';
import { TodosContext } from '../../../context/todos-context';

export const AllTodosPage = () => {
  const todosContext = useContext(TodosContext);
  const [todoElements, setTodoElements] = useState([]);

  useEffect(() => {
    const todoElems = todosContext.todos.map(todo => {
      return <Todo
        key={todo.id}
        text={todo.title}
        date={todo.date}
        isComplete={todo.isComplete}
        todoId={todo.id}
      />
    });
    setTodoElements(todoElems);
  }, [todosContext.todos]);

  return (
    <div className="todos-container">
      {todoElements}
    </div>
  );
}