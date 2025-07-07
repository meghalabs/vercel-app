// src/app/blog/page.tsx
export default function Blog() {
  const posts = ["Post One", "Post Two", "Post Three"];
  return (
    <div>
      <h1>Static Blog Page (App Router)</h1>
      <ul>
        {posts.map((title, i) => (
          <li key={i}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
