import React from "react";

const delayFetch = () =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            title: "New Post for Data",
            description: "This is the post 1 for new post testing",
          },
          {
            id: 2,
            title: "New Post for Data 2",
            description: "This is the post 2 for new post testing",
          },
          {
            id: 3,
            title: "New Post for Data 3",
            description: "This is the post 3 for new post testing",
          },
          {
            id: 4,
            title: "New Post for Data 4",
            description: "This is the post 4 for new post testing",
          },
          {
            id: 5,
            title: "Fifth post for testing",
            description: "This is the post 5 for new post testing",
          },
        ]),
      5000,
    );
  });

const loadDataFromServer = async () => {
  const response = await delayFetch();
  return response;
};

function Posts() {
  const articles = loadDataFromServer();
  return <div>Posts {JSON.stringify(articles)}</div>;
}

export default Posts;
