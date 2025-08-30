import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { BLOG_POSTS } from "../../../config/info";
import { BlogPost } from "../../../components";

const Blog = () => {
  return (
    <div className="flex flex-col gap-4">
      {BLOG_POSTS.slice(0, 4).map(BlogPost)}
      {BLOG_POSTS.length > 4 && (
        <div className="flex items-center justify-end">
          <Link
            to="/blog"
            className="text-xs text-gray-600 flex items-center gap-1 relative group w-fit"
          >
            View more
            <ArrowUpRight className="size-4" />
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
          </Link>
        </div>
      )}
    </div>
  );
};

export { Blog };
