import { Form, useParams } from "react-router-dom";
import ButtonComponent from "../../../../../sharedComponents/ButtonComponent/ButtonComponent";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../../../redux/slices/taskSlice";
import "./Task.css";

type Task = {
  id: string;
  title: string;
  description?: string;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Task = () => {
  const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");

  const dispatch = useDispatch();

  const { taskId } = useParams<{ taskId: string }>();

  const task: Task | undefined = tasks.find((task) => task.id === taskId);

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div id="contact">
      <div className="detail-buttons">
        <p>{task.title}</p>
        <p>{task.id}</p>
        <Form action="edit">
          <ButtonComponent className="task-button">Edit</ButtonComponent>
        </Form>
        <Form
          method="post"
          action="destroy"
          onSubmit={(e) => {
            e.preventDefault();
            if (window.confirm("Are you sure you want to delete this task?")) {
              handleDelete();
            }
          }}
        >
          <ButtonComponent className="task-button">Delete</ButtonComponent>
        </Form>
      </div>
    </div>
  );
};

export default Task;
