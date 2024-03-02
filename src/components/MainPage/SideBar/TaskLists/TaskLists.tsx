import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { Link } from "react-router-dom";

const TaskLists = () => {
  const tasks = useSelector((state: RootState) => state.taskSlice.tasks);
  return (
    <>
      <div className="tasks-list">
        <ul>
          {tasks.length > 0  ? (
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  <Link to={`tasks/${task.id}`}>{task.title}</Link>
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
