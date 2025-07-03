import React from 'react';

const IconBlog = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-blog">
    <title>Blog</title>
    {/* Main rectangle for the blog post */}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    {/* Horizontal line for the title of the blog */}
    <line x1="7" y1="8" x2="17" y2="8"></line>
    {/* Multiple lines for the body of the blog */}
    <line x1="7" y1="12" x2="17" y2="12"></line>
    <line x1="7" y1="16" x2="14" y2="16"></line>
  </svg>
);

export default IconBlog;
