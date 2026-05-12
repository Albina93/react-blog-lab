import { useParams, Link } from "react-router-dom";
import { posts } from "../lib/posts";

function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <div>
        <p>Sorry, we could not find a post with that URL...</p>
      </div>
    );
  }
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <Link to="/blog">⬅️Back to Blog</Link>
    </div>
  );
}
export default BlogPost;
