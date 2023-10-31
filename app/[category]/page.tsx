import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA";
import PaddingContainer from "@/components/layout/padding-container";
import PostList from "@/components/post/post-list";

export const generateStaticParams = async () => {
  return DUMMY_CATEGORIES.map((category) => {
    return {
      params: {
        category: category.slug,
      },
    };
  });
};

const Page = ({
  params,
}: {
  params: {
    category: string;
  };
}) => {
  const posts = DUMMY_POSTS.filter(
    (post) => post.category.title.toLowerCase() === params.category
  );

  return (
    <PaddingContainer>
      <PostList posts={posts} />
    </PaddingContainer>
  );
};

export default Page;
