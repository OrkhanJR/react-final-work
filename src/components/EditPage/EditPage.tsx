import { Form, useParams } from "react-router-dom";
import "./EditPage.css";
import ButtonComponent from "../../sharedComponents/ButtonComponent/ButtonComponent";
import { editTask } from "../../redux/slices/taskSlice";

import { useDispatch } from "react-redux";

const EditPage = () => {
  const dispatch = useDispatch();
  const { taskId } = useParams<{ taskId: string }>();

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("task") as string;
    const description = formData.get("tasks") as string;
    dispatch(editTask({ id: taskId, title, description }));
  };
  return (
    <>
      <Form method="post" id="task-form" onSubmit={handleEdit}>
        <div className="edit-form">
          <span>Edit task</span>
          <input
            className="input-styles"
            placeholder="Task name"
            aria-label="Task name"
            type="text"
            name="task"
          />
          <input
            placeholder="Description"
            aria-label="Description name"
            type="text"
            name="description"
            className="input-styles"
          />
          <ButtonComponent className="task-button">Edit</ButtonComponent>
        </div>
      </Form>
    </>
  );
};

export default EditPage;
