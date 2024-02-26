import SearchButtonComponent from "./SearchButtonComponent/SearchButtonComponent";
import SearchInputComponent from "./SearchInputComponent/SearchInputComponent";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-wrapper">
        <div className="search-area">
          {" "}
          <SearchInputComponent />
          <SearchButtonComponent />
        </div>
        <hr />
      </div>
    </>
  );
};

export default SideBar;
