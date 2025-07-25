import { Post } from "./Post";

export const LoadPosts = (props) => {
  const { lstData, getEditPostData, deletePostData } = props;

  console.log(lstData);

  return (
    <ol>
      {lstData.map((curEle) => {
        const { id } = curEle;
        return (
          <Post
            key={id}
            data={curEle}
            getEditPostData={getEditPostData}
            deletePostData={deletePostData}
          />
        );
      })}
    </ol>
  );
};
