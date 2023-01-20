import React from "react";
import Post from "./Post";

interface Props {
  posts: any[];
}

export default function PostList(props: Props) {
  const { posts } = props;
  return (
    <div>
      {posts.map((post, i) => (
        <Post key={i} data={post} />
      ))}
    </div>
  );
}
