import { useState } from "react";
import { postCall } from "../../api_services_utils/AxiosAPIMethods";

export const AddPost = (props) => {
  const apiAccessMethod = import.meta.env.VITE_API_ACCESS_METHOD;

  const { lstData, setLstPosts } = props;
  const [addedPost, setAddPost] = useState({ title: "", body: "" });

  const handleInputValue = (ev) => {
    const { name, value } = ev.target;

    setAddPost((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmitPost = (ev) => {
    ev.preventDefault();
    try {
      if (apiAccessMethod === "axios") {
        addData("/posts", addedPost);
      }
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  };

  const addData = async (URL, payload) => {
    const res = await postCall(URL, payload);

    if (res.status === 201) {
      console.log("Post added successfully");

      setLstPosts([...lstData, res.data]);
    } else {
      console.error("Error Message ", res.error.message);
      console.error("Error Status ", res.error.status);
      console.error("Failed to add post");
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
          placeholder="Add Title"
          value={addedPost.Title}
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
          placeholder="Add Body"
          value={addedPost.Body}
          onChange={(ev) => handleInputValue(ev)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
