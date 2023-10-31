import { Post } from "@/types/collection";
import PostCard from "./post-card";
import { DUMMY_POSTS } from "@/DUMMY_DATA";

interface PostListProps {
  posts: Post[];
  layout?: "vertical" | "horizontal";
}

const PostList = ({ posts, layout = "vertical" }: PostListProps) => {
  return (
    <div>
      {posts.map((post) => (
        <PostCard layout={layout} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
