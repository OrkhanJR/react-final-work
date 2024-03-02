import ButtonComponent from "../../../../sharedComponents/ButtonComponent/ButtonComponent";
import InputComponent from "../../../../sharedComponents/InputComponent/InputComponent";
import { useTypedDispatch } from "../../../../store";
import { addTask, Task } from "../../../../redux/slices/taskSlice";

const SearchArea = () => {
  const dispatch = useTypedDispatch();

  const handleAddTask = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getHours()}:${currentDate.getMinutes()} ${currentDate.getDate()} ${currentDate.toLocaleString(
      "default",
      { month: "long" }
    )} ${currentDate.getFullYear()}`;

    const newTask = {
      id: Math.random().toString(36).substring(2, 9),
      title: "New Task",
      description: "",
      creationDate: formattedDate,
    };

    dispatch(addTask(newTask));
  };

  return (
    <>
      <div className="search-area">
        {" "}
        <InputComponent
          className="input-styles"
          type="text"
          placeholder="Search"
        />
        <ButtonComponent
          className="task-button"
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
