import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false); // New state variable

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!title.trim()) {
      setErrorMessage("Title is required");
      return;
    }

    try {
      await axios.post("http://localhost:4000/posts", {
        title,
      });

      setTitle("");
      setErrorMessage("");
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <div>
      {submitted ? (
        <div>Post submitted successfully!</div>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              required
            />
            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      )}
    </div>
  );
};

export default PostCreate;
