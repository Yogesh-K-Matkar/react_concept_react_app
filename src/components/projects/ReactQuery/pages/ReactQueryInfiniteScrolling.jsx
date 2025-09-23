import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchUsers } from "../api/api.js";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ReactQueryInfiniteScrolling = () => {
  const { data, status, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn: fetchUsers,
      getNextPageParam: (lastPage, allPages) => {
        console.log("lastPage", lastPage, allPages);

        return lastPage.length === 10 ? allPages.length + 1 : undefined;
      },
      initialPageParam: 1,
    });

  console.log(data);

  //implement page scrolling
  // const handleScroll = () => {
  //   const pageHeight = window.innerHeight;
  //   const pageScrollY = window.scrollY;

  //   const documentHeight = document.documentElement.scrollHeight;

  //   console.log(
  //     documentHeight,
  //     pageHeight,
  //     pageScrollY,
  //     pageHeight + pageScrollY,
  //     documentHeight - 150
  //   );

  //   const scrollReachBottom = pageHeight + pageScrollY >= documentHeight - 150;

  //   if (scrollReachBottom && hasNextPage) {
  //     fetchNextPage();
  //   }
  // };

  // Above code is replace by npm pacakage - react-intersection-observer

  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    //implement scroll event listener
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
    // Above code is replace by npm pacakage - react-intersection-observer

    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage, inView]);

  if (status === "loading") return <div className="loader">Loading...</div>;
  if (status === "error")
    return <div>{console.error("Error fetching data!")}</div>;

  return (
    <>
      <h1>Infinite Scrolling using React Quey v5</h1>

      {data?.pages?.map((page, index) => {
        return (
          <ul key={index}>
            {page?.map((user, index) => {
              return (
                <li
                  key={index}
                  style={{ padding: "10px", border: "1px solid #ccc" }}
                >
                  <p>{user.login}</p>
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    width={50}
                    height={50}
                  />
                </li>
              );
            })}
          </ul>
        );
      })}
      <div ref={ref} style={{ padding: "20px", textAlign: "center" }}>
        <div className="loader">
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Scroll down to load more"
            : "Nothing more to load "}
        </div>
      </div>
    </>
  );
};

export default ReactQueryInfiniteScrolling;
