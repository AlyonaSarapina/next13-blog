import siteConfig from "@/config/site";
import PaddingContainer from "../layout/padding-container";
import Link from "next/link";
import SocialLink from "../elements/social-link";

const Footer = () => {
  return (
    <div className="py-8 border-t mt-10">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold"> {siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-neutral-700 text-lg">
            {siteConfig.description}
          </p>
        </div>
        <div className="mt-6 flex justify-between gap-4 flex-wrap">
          <div>
            <div className="font-medium text-lg">#citizenoftheworld</div>
            <div className="flex items-start gap-3 text-neutral-600 mt-2">
              <SocialLink
                platform="linkedin"
                link={siteConfig.socialLinks.linkedin}
              />
              <SocialLink
                platform="instagram"
                link={siteConfig.socialLinks.instagram}
              />
              <SocialLink
                platform="github"
                link={siteConfig.socialLinks.github}
              />
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">Currently At</div>
            <div className="bg-white shadow-md rounded-md px-3 py-2 flex items-center gap-2">
              <div className="bg-emerald-400 rounded-full w-2 h-2" />
              <p>{siteConfig.currentlyAt}</p>
            </div>
          </div>
        </div>
        <div className="border-t py-3 flex flex-wrap items-center gap-4 justify-between mt-16">
          <div className="text-sm text-neutral-400">
            All rights are reserved | Copyright {new Date().getFullYear()}
          </div>
          <div>
            Made with love by{" "}
            <Link
              href="https://www.linkedin.com/in/alona-sarapina-97a1aa283/"
              className="underline underline-offset-4"
            >
              @alyonasarapina
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
