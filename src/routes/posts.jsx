import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getPosts } from "../posts";

export default function Posts() {
  let posts = getPosts();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {posts.map((post) => {
          return (
            <NavLink
              to={`/posts/${post.id}`}
              key={post.id}
              style={{ display: "block", margin: "1rem 0", }}
            >
              {post.name}
            </NavLink>)

        })}
      </nav>
      <Outlet />
    </div>
  );
}