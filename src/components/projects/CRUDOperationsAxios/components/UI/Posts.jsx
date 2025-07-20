import { Post } from "./Post";

export const Posts = (props) => {
  const { lstData } = props;

  console.log(lstData);
  return (
    <section className="section-post">
      <ol>
        {lstData.map((curEle) => {
          const { id } = curEle;
          return <Post key={id} data={curEle} />;
        })}
      </ol>
    </section>
  );
};
