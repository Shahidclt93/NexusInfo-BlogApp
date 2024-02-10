import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DUMMY_POSTS } from "../data";
import MetaData from "../components/MetaData";

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="dashboard">
      <MetaData title="My Posts"/>
      {posts.length ? (
        <div className="container dashboard__container">
          {posts.map((post) => {
            return (
              <article key={post.id} className="dashboard__post">
                <div className="dashboard_post__info">
                  <div className="dashboard_post__thumbnail">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard_post__actions">
                  <Link
                    to={`/posts/${post.id}`}
                    style={{ margin: "auto", fontSize: "0.9rem" }}
                  >
                    View
                  </Link>
                  <Link to={`/posts/${post.id}/edit`} className="btn primary">
                    Edit
                  </Link>
                  <Link to={`/posts/${post.id}/delete`} className="btn danger">
                    Delete
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2 style={{ textAlign: "center" }}>You have made no posts yet.</h2>
      )}
    </section>
  );
};

export default Dashboard;
