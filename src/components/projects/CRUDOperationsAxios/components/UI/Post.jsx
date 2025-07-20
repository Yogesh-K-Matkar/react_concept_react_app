export const Post = (props) => {
  const { data, handleDeletePost } = props;

  //console.log(props);
  //console.log(data);

  // Destructuring the properties from props
  const { id, title, body } = data;

  return (
    <li>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <button>Edit</button>
      <button className="btn-delete" onClick={() => handleDeletePost(id)}>
        Delete
      </button>
    </li>
  );
};
