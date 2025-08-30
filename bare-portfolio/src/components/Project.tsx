import { Globe } from "lucide-react";
import type { Project as ProjectType } from "../types";
import { Github } from "../icons";

const Project = (project: ProjectType) => {
  return (
    <div
      key={project.id}
      className="flex flex-col gap-2 border border-gray-200 p-4 rounded-md h-full"
    >
      <div className="flex items-center justify-between gap-2">
        <h4>{project.name}</h4>
        <div className="flex items-center gap-4">
          {project.github && (
            <a href={project.github} className="relative group">
              <Github className="size-4 cursor-pointer" />
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
            </a>
          )}
          {project.website && (
            <a href={project.website} className="relative group">
              <Globe className="size-4 cursor-pointer" />
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-200 group-hover:w-full" />
            </a>
          )}
        </div>
      </div>
      <p className="text-xs text-gray-600">{project.description}</p>
      <div className="flex items-center gap-2 justify-end flex-wrap mt-auto">
        {project.tags?.map(tag => (
          <span
            key={tag}
            className="text-xs rounded-full border border-gray-200 p-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export { Project };
