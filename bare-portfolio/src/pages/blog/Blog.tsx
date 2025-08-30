import { ArrowUpLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { BLOG_POSTS, CITY, COUNTRY } from "../../config/info";
import { BlogPost, LiveClock } from "../../components";

const Blog = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1) || navigate("/");
  return (
    <div className="bg-white text-black font-mono py-8 px-16 min-h-screen flex flex-col">
      <header className="mb-4">
        <button
          onClick={goBack}
          className="text-xs text-gray-600 flex items-center gap-1 relative group w-fit mb-4"
        >
          Go back
          <ArrowUpLeft className="size-4" />
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
        </button>
        <h1 className="text-2xl">Blog</h1>
      </header>

      <main className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BLOG_POSTS.map(BlogPost)}
        </div>
      </main>

      <footer className="text-xs text-right">
        <LiveClock />
        <p>
          {CITY}, {COUNTRY}
        </p>
      </footer>
    </div>
  );
};

export default Blog;
