import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostAuthor from "../components/PostAuthor";
import MetaData from "../components/MetaData";
import { HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/DataContextProvider";
import HTMLReactParse from "html-react-parser";
import ScrollToTop from "../components/ScrollToTop";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const PostDetail = () => {
  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();
  const { getPostDetails, deletePost } = useDataContext();
  const [deleteModal, setDeleteModal] = useState(false);


  const { title, desc, thumbnail, authorID } = getPostDetails(id);
  const handleDelete = () => {
    deletePost(id);
    navigate("/");
    toast.success("Post deleted")
  };

  return (
    <HelmetProvider>
      <ScrollToTop />
      <section className="post_detail">
        <MetaData title="Post Info" />
        <div className="container post_detail__container">
          <div className="post_detail__header">
            <PostAuthor authorID={authorID} />
            <div className="post_detail__buttons">
              <Link to={`/posts/${id}/edit`} className="btn sm primary">
                Edit
              </Link>
              <a
                href="#"
                className="btn sm danger"
                onClick={() => setDeleteModal(true)}
              >
                Delete
              </a>
            </div>
          </div>
          <h1>{title}</h1>
          <div className="post_detail__thumbnail">
            <img src={thumbnail} alt="" />
          </div>
          <div className="post_detail__desc">{HTMLReactParse(desc)}</div>
        </div>
        <div
          className={`post_delete ${deleteModal ? "show" : ""}`}
          onClick={() => setDeleteModal(false)}
        >
          <div
            className="post_delete__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <p>are you sure you want to delete this Post?</p>
            <div
              className="post_delete__bottom"
              onClick={() => setDeleteModal(false)}
            >
              <a href="#" className="btn primary sm">
                cancel
              </a>
              <a href="#" className="btn danger sm" onClick={handleDelete}>
                delete
              </a>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default PostDetail;
