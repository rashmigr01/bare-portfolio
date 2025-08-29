import type { Project } from "./types";

/****** Header Info ******/
const NAME = "Name";
const DESCRIPTION = "Description";

/****** Footer Info ******/
const TIMEZONE = "en-IN";
const CITY = "City";
const COUNTRY = "Country";

/****** Contact Section Info ******/
const EMAIL = "name@email.com";
const GITHUB = "github.com/username";
const LINKEDIN = "linkedin.com/in/username";
const X = "x.com/username";
const BLUESKY = "bsky.app/profile/username.bsky.social";
const INSTAGRAM = "instagram.com/username";
const FACEBOOK = "facebook.com/username";

/****** Projects Section Info ******/
const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    github: "https://github.com/username/project1",
    website: "https://project1.com",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    github: "https://github.com/username/project2",
    website: "https://project2.com",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    github: "https://github.com/username/project3",
    website: "https://project3.com",
  },
  {
    id: 4,
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    github: "https://github.com/username/project4",
    website: "https://project4.com",
  },
  {
    id: 5,
    name: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    github: "https://github.com/username/project5",
    website: "https://project5.com",
  },
  {
    id: 6,
    name: "Project 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    github: "https://github.com/username/project6",
    website: "https://project6.com",
  }
];

export { PROJECTS, NAME, DESCRIPTION, TIMEZONE, CITY, COUNTRY, EMAIL, GITHUB, LINKEDIN, X, BLUESKY, INSTAGRAM, FACEBOOK };