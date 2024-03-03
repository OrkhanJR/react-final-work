import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const tasks = useSelector((state: RootState) => state.taskSlice.tasks);

  const task = tasks.find((task) => task.id === taskId);

  return (
    <>
      {task ? (
        <div className="details">
          <h2>Title: {task.title}</h2>
          <p>Description: {task.description}</p>
          <p>Creation Date: {task.creationDate}</p>
          <p>Status: {task.status ? "Done" : "Not done"}</p>
        </div>
      ) : (
        <p>Task not found</p>
      )}
    </>
  );
};

export default DetailsPage;
