import type { BlogPost, Project } from "../src/types";

/****** Header Info ******/
const NAME = "Rashmi G R";
const DESCRIPTION =
  "Software Engineer, CSE Grad at Indian Institute of Technology Kanpur";

/****** Footer Info ******/
const TIMEZONE = "en-IN";
const CITY = "Bengaluru";
const COUNTRY = "India";

/****** Contact Info ******/
const EMAIL = "rashmigr01@gmail.com";
const GITHUB = "github.com/rashmigr01";
const LINKEDIN = "linkedin.com/in/rashmigr01";
const X = "x.com/rashmigr01";
const BLUESKY = "bsky.app/profile/rashmigr01.bsky.social";
const INSTAGRAM = "instagram.com/rashmigr01";
const FACEBOOK = "facebook.com/rashmigr01";

/****** Projects Info ******/
const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Bare Portfolio",
    description: "A minimalist, black & white portfolio template.",
    github: "https://github.com/rashmigr01/bare-portfolio",
    website: "https://bare-portfolio.vercel.app",
    tags: ["React", "Tailwind CSS", "Vite"],
  },
];

/****** Blogs Info ******/
const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "init: add setup",
    tags: ["Thoughts"],
    filePath: "1.md",
  },
];

export {
  PROJECTS,
  BLOG_POSTS,
  NAME,
  DESCRIPTION,
  TIMEZONE,
  CITY,
  COUNTRY,
  EMAIL,
  GITHUB,
  LINKEDIN,
  X,
  BLUESKY,
  INSTAGRAM,
  FACEBOOK,
};
