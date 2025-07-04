export default function Blog() {
  const blogs = ["my-first-post", "my-second-post", "my-third-post"];
  return (
    <>
      <p>Blogs list</p>
      <ul>
        {blogs.map((blog, index) => {
          return (
            <li key={index}>
              <a href={`/blogs/${blog}`}>{blog}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
