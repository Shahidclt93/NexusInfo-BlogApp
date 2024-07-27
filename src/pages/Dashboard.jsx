import React from "react";
import { Link } from "react-router-dom";
import MetaData from "../components/MetaData";
import { HelmetProvider } from "react-helmet-async";
import Loader from "../components/loader/LoaderMain/Loader";
import { useDataContext } from "../context/DataContext";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { data, deletePost, loading } = useDataContext();
  const handleDelete = (id) => {
    deletePost(id);
    toast.success("Post deleted");
  };
  return (
    <>
      <HelmetProvider>
        <MetaData title="My Posts" />
        {loading ? (
          <Loader />
        ) : (
          <section className="dashboard">
            {data.length ? (
              <div className="container dashboard__container">
                {data.map((post) => {
                  return (
                    <article key={post.id} className="dashboard__post">
                      <div className="dashboard_post__info">
                        <div className="dashboard_post__thumbnail">
                          <img src={post.thumbnail} alt="" />
                        </div>
                        <h5>{post.title}</h5>
                      </div>
                      <div className="dashboard_post__actions">
                        <Link to={`/posts/${post.id}`}>View</Link>
                        <Link
                          to={`/posts/${post.id}/edit`}
                          className="btn primary sm"
                        >
                          Edit
                        </Link>
                        <a
                          href="#"
                          className="btn danger sm"
                          onClick={() => handleDelete(post.id)}
                        >
                          Delete
                        </a>
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

export default Dashboard;
