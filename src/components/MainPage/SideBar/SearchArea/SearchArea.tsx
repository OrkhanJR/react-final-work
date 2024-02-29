import ButtonComponent from "../../../../sharedComponents/ButtonComponent/ButtonComponent";
import InputComponent from "../../../../sharedComponents/InputComponent/InputComponent";

const SearchArea = () => {
  return (
    <>
      <div className="search-area">
        {" "}
        <InputComponent
          className="search-input"
          type="text"
          placeholder="Search"
        />
        <ButtonComponent className="new-task-button">New Task</ButtonComponent>
      </div>
      <hr />
    </>
  );
};

export default SearchArea;
