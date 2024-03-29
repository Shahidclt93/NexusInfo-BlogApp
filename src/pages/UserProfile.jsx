import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar3.jpg";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import MetaData from "../components/MetaData";
import { HelmetProvider } from "react-helmet-async";

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <HelmetProvider>
      <section className="profile">
        <MetaData title="Profile" />
        <div className="container profile__container">
          <Link to={`/myposts/edresag`} className="btn">
            My Posts
          </Link>
          <div className="profile__details">
            <div className="avatar__wrapper">
              <div className="profile__avatar">
                <img src={avatar} alt="" />
              </div>

              <form className="avatar__form">
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  accept="png,jpg,jpeg"
                />
                <label htmlFor="avatar">
                  <FaEdit />
                </label>
              </form>
              <button className="profile_avatar__btn">
                <FaCheck />
              </button>
            </div>
            <h1>Adam Johnson</h1>

            <form className="form profile__form">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type="submit" className="btn primary">
                Update details
              </button>
            </form>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default UserProfile;
