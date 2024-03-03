import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { Link } from "react-router-dom";
import ButtonComponent from "../../../../sharedComponents/ButtonComponent/ButtonComponent";
import {
  deleteTask,
  changeStatus,
  changeCheckStatus,
} from "../../../../redux/slices/taskSlice";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../../../sharedComponents/InputComponent/InputComponent";

const TaskLists = () => {
  const tasks = useSelector((state: RootState) => state.taskSlice.tasks);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    tasks.forEach((task) => {
      const storedTask = JSON.parse(localStorage.getItem(task.id) || "{}");
      dispatch(
        changeCheckStatus({
          taskId: task.id,
          checkStatus: storedTask.checkStatus || false,
        })
      );
    });
  }, [tasks, dispatch]);

  const handleDelete = (taskId: string) => {
    dispatch(deleteTask(taskId));
    navigate("/");
  };

  const handleStatus = (taskId: string) => {
    dispatch(changeStatus(taskId));
  };

  const handleCheckedStatus = (taskId: string) => {
    dispatch(changeCheckStatus(taskId));
    const taskToChange = tasks.find((task) => task.id === taskId);
    if (taskToChange) {
      localStorage.setItem(
        taskId,
        JSON.stringify({ checkStatus: !taskToChange.checkStatus })
      );
    }
  };

  return (
    <>
      <div className="tasks-list">
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <InputComponent
                  type="checkbox"
                  onChange={() => {
                    handleStatus(task.id);
                    handleCheckedStatus(task.id);
                  }}
                  checked={task.checkStatus}
                />
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
      </div>
    </>
  );
};

export default TaskLists;
