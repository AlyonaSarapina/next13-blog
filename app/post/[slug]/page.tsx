import { DUMMY_POSTS } from "@/DUMMY_DATA";
import SocialLink from "@/components/elements/social-link";
import PaddingContainer from "@/components/layout/padding-container";
import PostHero from "@/components/post/post-hero";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
};

const Page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PaddingContainer>
      <PostHero post={post} />
      <div className="mt-10 flex gap-10">
        <div className="relative">
          <div className="sticky top-20 flex flex-col gap-5">
            <SocialLink
              platform="facebook"
              link={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}
              isShareUrl
            />
            <SocialLink
              platform="twitter"
              link={`https://www.twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}
              isShareUrl
            />
            <SocialLink
              platform="linkedin"
              link={`https://www.linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}
              isShareUrl
            />
          </div>
        </div>
        <div className="h-[1200px] bg-slate-200 w-full">Post Body</div>
      </div>
    </PaddingContainer>
  );
};

export default Page;
