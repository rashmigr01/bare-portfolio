import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { PROJECTS } from "../../../../config/info";
import { Project } from "../../../components";

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      {PROJECTS.slice(0, 3).map(Project)}
      {PROJECTS.length > 3 && (
        <div className="flex items-center justify-end">
          <Link
            to="/projects"
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

export { Projects };
