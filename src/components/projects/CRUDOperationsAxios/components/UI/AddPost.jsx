import { useState } from "react";

export const AddPost = (props) => {
  const { handleCreatePost } = props;

  const initAddPost = { title: "", body: "" };
  const [addedPost, setAddPost] = useState(initAddPost);

  const handleInputValue = (ev) => {
    const { name, value } = ev.target;

    setAddPost((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmitPost = (ev) => {
    ev.preventDefault();
    try {
      handleCreatePost(addedPost);
      setAddPost(initAddPost);
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  };

  return (
    <form onSubmit={(ev) => handleSubmitPost(ev)}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Title"
          value={addedPost.title}
          onChange={(ev) => handleInputValue(ev)}
        />
      </div>
      <div>
        <label htmlFor="body"></label>
        <input
          type="text"
          autoComplete="off"
          id="body"
          name="body"
          placeholder="Body"
          value={addedPost.body}
          onChange={(ev) => handleInputValue(ev)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
