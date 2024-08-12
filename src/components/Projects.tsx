import { ChevronDown } from "../assets/icons";
import { projects } from "../projects";

import Project from "./Project";

function Projects() {
  return (
    <>
      {/* head */}
      <div className=" mt-11 flex gap-4 max-w-screen-xl mx-auto px-4 py-2 rounded-md border-gray-400 border mb-4 text-gray-500">
        <div>Sort By: </div>
        <div className="flex items-center">
          <span>Date Created</span>
          <span>
            <ChevronDown fill="currentcolor" width="16" height="16" />
          </span>
        </div>
        <div className="flex items-center">
          <span>Level</span>
          <span>
            <ChevronDown fill="currentcolor" width="16" height="16" />
          </span>
        </div>
      </div>

      {/* projects */}
      <div className="grid grid-cols-2 gap-4 max-w-screen-xl mx-auto">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
