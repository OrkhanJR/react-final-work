import ButtonComponent from "../../../../sharedComponents/ButtonComponent/ButtonComponent";
import InputComponent from "../../../../sharedComponents/InputComponent/InputComponent";
import { useTypedDispatch } from "../../../../store";
import { addTask, Task } from "../../../../redux/slices/taskSlice";

const SearchArea = () => {
  const dispatch = useTypedDispatch();

  const handleAddTask = () => {
    const newTask: Task = {
      id:  Math.random().toString(36).substring(2, 9),
      title: "New Task", 
    };
    dispatch(addTask(newTask));
  };
  return (
    <>
      <div className="search-area">
        {" "}
        <InputComponent
          className="search-input"
          type="text"
          placeholder="Search"
        />
        <ButtonComponent
          className="new-task-button"
          onClick={() => dispatch(handleAddTask)}
        >
          New Task
        </ButtonComponent>
      </div>
      <hr />
    </>
  );
};

export default SearchArea;
