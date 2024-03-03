import ButtonComponent from "../../../../sharedComponents/ButtonComponent/ButtonComponent";
import InputComponent from "../../../../sharedComponents/InputComponent/InputComponent";
import { useTypedDispatch } from "../../../../store";
import { addTask } from "../../../../redux/slices/taskSlice";
import { useState } from "react";

const SearchArea = () => {
  const dispatch = useTypedDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (!inputValue.trim()) {
      return;
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate.getHours()}:${currentDate.getMinutes()} ${currentDate.getDate()} ${currentDate.toLocaleString(
      "default",
      { month: "long" }
    )} ${currentDate.getFullYear()}`;

    const newTask = {
      id: Math.random().toString(36).substring(2, 9),
      title: inputValue,
      description: "",
      creationDate: formattedDate,
    };

    dispatch(addTask(newTask));
    setInputValue("");
  };

  return (
    <>
      <div className="search-area">
        {" "}
        <InputComponent
          className="input-styles"
          type="text"
          placeholder="Title"
          value={inputValue}
          onChange={handleInputChange}
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
