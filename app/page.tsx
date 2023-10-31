import { DUMMY_POSTS } from "@/DUMMY_DATA";
import CTACard from "@/components/elements/cta-card";
import PaddingContainer from "@/components/layout/padding-container";
import PostCard from "@/components/post/post-card";
import PostList from "@/components/post/post-list";
import Link from "next/link";

export default function Home() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
        <PostList posts={DUMMY_POSTS.slice(1, 3)} />
        <CTACard />
        <PostCard reverse={true} post={DUMMY_POSTS[3]} />
        <PostList posts={DUMMY_POSTS.slice(4, 6)} />
      </main>
    </PaddingContainer>
  );
}
