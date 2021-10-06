import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <NavLink
          className="nav-link active"
          aria-current="page"
          to="/home"
        >
          Home page
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/all_posts"
        >
          All Posts
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/add_post"
        >
          Add Post
        </NavLink>
      </li>
    </ul>
  );
};
