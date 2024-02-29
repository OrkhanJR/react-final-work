import SearchArea from "./SearchArea/SearchArea";
import TaskLists from "./TaskLists/TaskLists";

const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
      <SearchArea />
      <TaskLists />
    </div>
  );
};

export default SideBar;
