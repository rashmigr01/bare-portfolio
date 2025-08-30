import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost as BlogPostType } from "../types";

const BlogPost = (blog: BlogPostType) => {
  return (
    <Link
      to={`/blog/${blog.id}`}
      key={blog.id}
      className="flex flex-col gap-2 border border-gray-200 p-4 rounded-md h-full"
    >
      <div className="flex items-center justify-between gap-2">
        <h4>{blog.title}</h4>
        <div className="relative group">
          <ArrowUpRight className="size-4" />
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
        </div>
      </div>
      <div className="flex items-center gap-2 justify-start flex-wrap">
        {blog.tags?.map(tag => (
          <span
            key={tag}
            className="text-xs rounded-full border border-gray-200 p-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export { BlogPost };
