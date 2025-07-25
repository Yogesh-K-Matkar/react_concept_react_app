export const Post = (props) => {
  const apiAccessMethod = import.meta.env.VITE_API_ACCESS_METHOD;

  const { data, getEditPostData, deletePostData } = props;

  //console.log(props);
  //console.log(data);

  // Destructuring the properties from props
  //const { id, title, body } = data;

  //edit
  const handleEditPost = (editPost) => {
    console.log("Edit");

    getEditPostData(editPost);
  };

  //delete
  const handleDeletePost = (id) => {
    console.log("Delete");
    try {
      if (apiAccessMethod === "axios") {
        deletePostData(`/posts/${id}`, id);
      }
    } catch (error) {
      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  };

  return (
    <li>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>
      <button onClick={() => handleEditPost(data)}>Edit</button>
      <button className="btn-delete" onClick={() => handleDeletePost(data.id)}>
        Delete
      </button>
    </li>
  );
};
