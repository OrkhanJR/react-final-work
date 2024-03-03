import { useSelector } from "react-redux";
import { RootState } from "../../store";


const DetailsPage = () => {
    const tasks = useSelector((state: RootState) => state.taskSlice.tasks);
  return (
    <>
      {tasks.map((task) => {
      return <p key={task.id}>{task.title}</p>
      })}
    </>
  );
};

export default DetailsPage;