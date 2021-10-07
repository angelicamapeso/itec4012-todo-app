import './styles.css';
import { Todo } from "../../todo";

export const AllTodosPage = () => {
  return (
    <div>
      <Todo
        text="Walk my dog"
        date="10/10/2021"
        color="blue"
      />
      <Todo
        text="Buy laundry detergent"
        date="11/10/2021"
        color="purple"
      />
      <Todo
        text="Workout"
        date="12/10/2021"
        color="red"
      />
    </div>
  );
}