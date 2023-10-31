export interface SiteConfig {
  siteName: string,
  description: string,
  currentlyAt: string,
  socialLinks: {
    github: string,
    linkedin: string,
    instagram: string,
  }
}

const siteConfig: SiteConfig = {
  siteName: "Citizen",
  description: "A minimal and lovely travel blog which shares experiences and cities around the world!",
  currentlyAt: "Glasgow",
  socialLinks: {
    github: "https://github.com/AlyonaSarapina",
    linkedin: "https://www.linkedin.com/in/alona-sarapina-97a1aa283/",
    instagram: "https://www.instagram.com/alyona.sarapina/"
  }
}

export default siteConfig;