type Project = {
  id: number;
  name: string;
  description?: string;
  github?: string;
  website?: string;
  tags?: string[];
};

type BlogPost = {
  id: number;
  title: string;
  tags?: string[];
  filePath: string;
};

export type { Project, BlogPost };
