import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/LoaderMain/Loader";
import MetaData from "../components/MetaData";
import { HelmetProvider } from "react-helmet-async";
import { useDataContext } from "../context/DataContextProvider";

const MyPosts = () => {
  const { myPosts, loading } = useDataContext();
  return (
    <>
      <HelmetProvider>
        <MetaData title="My Posts" />
        {loading ? (
          <Loader />
        ) : (
          <section className="dashboard">
            {myPosts.length ? (
              <div className="container dashboard__container">
                {myPosts.map((post, index) => {
                  return (
                    <article key={index} className="dashboard__post">
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
                        <Link
                          to={`/posts/${post.id}/edit`}
                          className="btn primary sm"
                        >
                          Edit
                        </Link>
                        <Link
                          to={`/posts/${post.id}`}
                          className="btn danger sm"
                        >
                          Delete
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <h2 style={{ textAlign: "center" }}>
                You have made no posts yet.
              </h2>
            )}
          </section>
        )}
      </HelmetProvider>
    </>
  );
};

export default MyPosts;
