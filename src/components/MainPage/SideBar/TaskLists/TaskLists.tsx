import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { Link } from "react-router-dom";
import ButtonComponent from "../../../../sharedComponents/ButtonComponent/ButtonComponent";
import { deleteTask } from "../../../../redux/slices/taskSlice";
import { useNavigate } from "react-router-dom";

const TaskLists = () => {
  const tasks = useSelector((state: RootState) => state.taskSlice.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleDelete = (taskId: string) => {
    dispatch(deleteTask(taskId));
    navigate("/")
  };

 
  return (
    <>
      <div className="tasks-list">
        <ul>
          {tasks.length > 0 ? (
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  <Link to={`tasks/${task.id}/Details`}>{task.title}</Link>
                  <Link
                    to={`tasks/${task.id}/Edit`}
                    className="task-button shorter"
                  >
                    Edit
                  </Link>
                  <ButtonComponent
                    onClick={() => handleDelete(task.id)}
                    className="task-button shorter delete"
                  >
                    Delete
                  </ButtonComponent>
                </li>
              ))}
            </ul>
          ) : (
            <i>No tasks available</i>
          )}
        </ul>
      </div>
    </>
  );
};

export default TaskLists;
