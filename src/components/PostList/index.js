import React, { useContext } from "react";
import NameContext from "../../context/NameContext";
import "./index.css";

function PostList(props) {
  return (
    <div className="post-list">
      {props.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
            author={post.author}
          />
        );
      })}
    </div>
  );
}

function Post(props) {
  const { title, description, author } = props;
  const { themeColor } = useContext(NameContext);

  return (
    <div className="post" style={{ backgroundColor: themeColor }}>
      <h1 className="post-title">{title}</h1>
      <p className="post-description">{description}</p>
      <p className="post-author">Author: {author}</p>
      <ActionMenu />
    </div>
  );
}

function ActionMenu() {
  const { name } = useContext(NameContext);

  return (
    <div className="post-actions">
      <span className="post-user">You are {name}</span>
      <button className="button post-edit-action-button">Edit</button>
      <button className="button post-delete-action-button">Delete</button>
    </div>
  );
}

export default PostList;
