import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const SocialLink = ({ platform, link }: { platform: string; link: string }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "github":
        return <Github size={18} />;
    }
  };

  return <Link href={link}>{getIcon(platform)}</Link>;
};

export default SocialLink;
