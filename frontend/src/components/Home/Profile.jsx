import React, { useState, useEffect } from "react";
import API from "../../api";
import "./Profile.css";

export default function Profile({ user, setUser }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: "", emailOrPhone: "" });
  const [photo, setPhoto] = useState(null);
  const [active, setActive] = useState(false); // toggle active/collapsed

  useEffect(() => {
    if (user) setForm({ name: user.name, emailOrPhone: user.emailOrPhone });
  }, [user]);

  const save = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("emailOrPhone", form.emailOrPhone);
      if (photo) data.append("photo", photo);

      const res = await API.put("/users/me", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUser(res.data);
      setEditing(false);
    } catch (err) {
      alert("Error updating profile!");
    }
  };

  if (!user) return <div>Loading profile...</div>;

  return (
    <div
      className={`profile-card pro ${active ? "active" : ""}`}
      onClick={(e) => {
        // prevent toggle when clicking inside form or button
        if (
          e.target.tagName !== "INPUT" &&
          e.target.tagName !== "BUTTON" &&
          e.target.tagName !== "FORM" &&
          e.target.tagName !== "LABEL"
        ) {
          setActive(!active);
        }
      }}
    >
      {/* Collapsed icon */}
      {!active && (
        <i
          className="fa-solid fa-circle-user"
          style={{ fontSize: "60px", color: "#111414ff" }}
        ></i>
      )}

      {/* Expanded content */}
      {active && (
        <>
          <img
            src={
              user.photoUrl
                ? `http://localhost:5000${user.photoUrl}`
                : "https://via.placeholder.com/120"
            }
            alt="profile"
          />

          {!editing ? (
            <>
              <h3>{user.name}</h3>
              <p>{user.emailOrPhone}</p>
              <button onClick={() => setEditing(true)}>Edit Profile</button>
            </>
          ) : (
            <form
              onSubmit={save}
              onClick={(e) => e.stopPropagation()} // prevent toggle when editing
            >
              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
              <input
                type="text"
                value={form.emailOrPhone}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    emailOrPhone: e.target.value,
                  }))
                }
                required
              />
              <input
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
                accept="image/*"
              />
              <button type="submit">Save</button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                style={{ background: "#f44336", color: "#292727ff" }}
              >
                Cancel
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

