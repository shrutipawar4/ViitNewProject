import React from 'react';

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-3 px-3" style={{ width: "300px" }}>
      <img src={src || "https://via.placeholder.com/300x200"} className="card-img-top" alt="news" style={{ height: "200px", width: "100%" }} />
      <div className="card-body">
        <h5 className="card-title">{title || "No Title"}</h5>
        <p className="card-text">{description || "No Description"}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more...</a>
      </div>
    </div>
  );
};

export default NewsItems;
