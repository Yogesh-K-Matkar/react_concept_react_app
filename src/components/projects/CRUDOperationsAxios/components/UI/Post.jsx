export const Post = (props) => {
  const apiAccessMethod = import.meta.env.VITE_API_ACCESS_METHOD;

  const { data, getEditPostData, deletePostData } = props;

  //console.log(props);
  //console.log(data);

  // Destructuring the properties from props
  //const { id, title, body } = data;

  //edit
  function handleEditPost(ev, editPost) {
    ev.preventDefault();
    console.log("Edit");
    try {
      getEditPostData(editPost);
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  }

  //delete
  function handleDeletePost(ev, id) {
    ev.preventDefault();
    console.log("Delete");
    try {
      if (apiAccessMethod === "axios") {
        deletePostData(id);
      }
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  }

  return (
    <li>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>
      <button onClick={(ev) => handleEditPost(ev, data)}>Edit</button>
      <button
        className="btn-delete"
        onClick={(ev) => handleDeletePost(ev, data.id)}
      >
        Delete
      </button>
    </li>
  );
};
