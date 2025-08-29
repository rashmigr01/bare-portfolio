import { Globe, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Github } from "../../../icons";
import { PROJECTS } from "../../../info";
import type { Project } from "../../../types";

const Projects = () => {

  const renderProject = (project: Project) => {
    return (
      <div key={project.id} className="flex flex-col gap-2 border border-gray-200 p-4 rounded-md">
        <div className="flex items-center justify-between gap-2">
          <h4>{project.name}</h4>
          <div className="flex items-center gap-4">
            {project.github && (
              <a href={project.github} className="relative group">
                <Github className="size-4 cursor-pointer" />
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full"/>
              </a>
            )}
            {project.website && (
              <a href={project.website} className="relative group">
                <Globe className="size-4 cursor-pointer" />
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full"/>
              </a>
            )}
          </div>
        </div>
        <p className="text-xs text-gray-600">{project.description}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {PROJECTS.slice(0, 4).map(renderProject)}
      {PROJECTS.length > 4 && (
        <div className="flex items-center justify-end">
        <Link to="/projects" className="text-xs text-gray-600 flex items-center gap-1 relative group w-fit">
          View more
            <ArrowUpRight className="size-4" />
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full"/>
          </Link>
        </div>
      )}
    </div>
  );
};

export { Projects };