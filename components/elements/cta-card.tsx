import Image from "next/image";

const CTACard = () => {
  return (
    <div className="rounded-md bg-slate-100 py-10 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/30 z-10"></div>
      <Image
        alt="CTA Card image"
        className="object-center object-cover"
        fill
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
      />
      <div className="relative z-20">
        <div className="font-medium text-lg">#exploretheworld</div>
        <h3 className="mt-3 text-4xl font-semibold">
          Explore the world with me!
        </h3>
        <p className="mt-2 text-lg max-w-lg">
          Explore the world with me! I&apos;m travelling around the most of the
          great cities of 🇪🇺 and currently I&apos;m travelling in 🇬🇧 Join me!
        </p>
        <form className="mt-6 flex items-center gap-2">
          <input
            type="text"
            className="bg-white/80 text-base rounded-md py-2 px-3 outline-none focus:ring-2 ring-neutral-600 placeholder:text-sm"
            placeholder="Write your email"
          />
          <button className="bg-neutral-900 py-2 px-3 text-neutral-200 rounded-md">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTACard;
