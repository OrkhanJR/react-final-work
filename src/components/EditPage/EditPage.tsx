import { Form, useParams } from "react-router-dom";
import "./EditPage.css";
import ButtonComponent from "../../sharedComponents/ButtonComponent/ButtonComponent";
import { Task, editTask } from "../../redux/slices/taskSlice";

import { useDispatch, useSelector } from "react-redux";
import InputComponent from "../../sharedComponents/InputComponent/InputComponent";
import { useEffect, useState } from "react";
import { RootState } from "../../store";

const EditPage = () => {
  const dispatch = useDispatch();
  const { taskId } = useParams<{ taskId: string }>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const task: Task | undefined = useSelector((state: RootState) =>
    state.taskSlice.tasks.find((task) => task.id === taskId)
  );

  useEffect(() => {
    if (task) {
      setTitle("");
      setDescription("");
    }
  }, [task]);
  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("task") as string;
    const description = formData.get("tasks") as string;
    dispatch(editTask({ id: taskId, title, description }));
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <Form method="post" id="task-form" onSubmit={handleEdit}>
        <div className="edit-form">
          <span>Edit task</span>
          <InputComponent
            className="input-styles"
            placeholder="Task name"
            aria-label="Task name"
            type="text"
            name="task"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputComponent
            placeholder="Description"
            aria-label="Description name"
            type="text"
            className="input-styles"
            name="description"
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
          />
          <ButtonComponent className="task-button">Edit</ButtonComponent>
        </div>
      </Form>
    </>
  );
};

export default EditPage;
