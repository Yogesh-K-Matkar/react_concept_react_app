import { useEffect, useState } from "react";

export const AddPost = (props) => {
  const apiAccessMethod = import.meta.env.VITE_API_ACCESS_METHOD;

  const { addPostData, getEditPostData, putPostData } = props;

  const initPost = { userId: 1, title: "", body: "" };
  const [post, setPost] = useState(initPost);

  function handleInputValue(ev) {
    const { name, value } = ev.target;

    setPost((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  // post
  function handleAddPost(post) {
    console.log("Post");
    try {
      if (apiAccessMethod === "axios") {
        addPostData(post);
      }
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  }

  // edit and update
  let isPostEdit = getEditPostData.title === "" ? false : true;

  useEffect(() => {
    try {
      console.log("Edit");

      isPostEdit
        ? setPost((prevState) => {
            return {
              ...prevState,
              id: getEditPostData.id,
              title: getEditPostData.title,
              body: getEditPostData.body,
            };
          })
        : "";
    } catch (error) {
      console.log(error);
    }
  }, [getEditPostData]);

  function handlePutPost(post) {
    console.log("Put");

    try {
      if (apiAccessMethod === "axios") {
        putPostData(post);
      }
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  }

  //ACTION - ADD or UPDATE ON EDIT

  function handleSubmitPost(ev) {
    ev.preventDefault();
    try {
      const action = ev.nativeEvent.submitter.value;
      action === "Add" ? handleAddPost(post) : handlePutPost(post);
      setPost(initPost);
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  }

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
          value={post.title}
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
          value={post.body}
          onChange={(ev) => handleInputValue(ev)}
        />
      </div>
      <button type="submit" value={isPostEdit ? "Update" : "Add"}>
        {isPostEdit ? "Update" : "Add"}
      </button>
    </form>
  );
};
