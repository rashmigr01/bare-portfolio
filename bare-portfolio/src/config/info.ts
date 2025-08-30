import type { BlogPost, Project } from "../types";

/****** Header Info ******/
const NAME = "Name";
const DESCRIPTION = "Description";

/****** Footer Info ******/
const TIMEZONE = "en-IN";
const CITY = "City";
const COUNTRY = "Country";

/****** Contact Info ******/
const EMAIL = "name@email.com";
const GITHUB = "github.com/username";
const LINKEDIN = "linkedin.com/in/username";
const X = "x.com/username";
const BLUESKY = "bsky.app/profile/username.bsky.social";
const INSTAGRAM = "instagram.com/username";
const FACEBOOK = "facebook.com/username";

/****** Projects Info ******/
const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    github: "https://github.com/username/project1",
    website: "https://project1.com",
    tags: ["Topic 1", "Topic 2", "Topic 3"],
  },
  {
    id: 2,
    name: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    github: "https://github.com/username/project2",
    tags: ["Topic 1", "Topic 2"],
  },
  {
    id: 3,
    name: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    website: "https://project3.com",
    tags: ["Topic 1", "Topic 2", "Topic 3"],
  },
  {
    id: 4,
    name: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    github: "https://github.com/username/project4",
    website: "https://project4.com",
    tags: ["Topic 1"],
  },
  {
    id: 5,
    name: "Project 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    github: "https://github.com/username/project5",
    website: "https://project5.com",
    tags: ["Topic 1", "Topic 2", "Topic 3", "Topic 4"],
  },
  {
    id: 6,
    name: "Project 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    github: "https://github.com/username/project6",
    website: "https://project6.com",
    tags: ["Topic 1", "Topic 2", "Topic 3"],
  },
];

/****** Blogs Info ******/
const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Blog Post 1",
    tags: ["Topic 1", "Topic 2", "Topic 3"],
    filePath: "1.md",
  },
  {
    id: 2,
    title: "Blog Post 2",
    tags: ["Topic 1", "Topic 2", "Topic 3"],
    filePath: "2.md",
  },
  {
    id: 3,
    title: "Blog Post 3",
    tags: ["Topic 1", "Topic 2", "Topic 3"],
    filePath: "3.md",
  },
  {
    id: 4,
    title: "Blog Post 4",
    tags: ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"],
    filePath: "4.md",
  },
  {
    id: 5,
    title: "Blog Post 5",
    tags: ["Topic 1", "Topic 2", "Topic 3"],
    filePath: "5.md",
  },
  {
    id: 6,
    title: "Blog Post 6",
    tags: ["Topic 1", "Topic 2", "Topic 3"],
    filePath: "6.md",
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
