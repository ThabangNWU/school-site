import React from "react";
import BlogCard from "./BlogCard";

const BlogPortal = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="blog">
      <div className="blog__header">
        <p>OUR STORIES</p>
        <button>CREATE POST</button>
      </div>
      <div className="blog__cards">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <br></br>
      <div className="blog__cards">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="blog__buttons">
        <button>prev</button>
        {arr.map((post) => (
          <button className={`blog__button__${post}`}>{post == 6? "...": post}</button>
        ))}
        <button>next</button>
      </div>
    </div>
  );
};

export default BlogPortal;
