import { ChevronDown } from "../assets/icons";
import { projects } from "../projects";

import Project from "./Project";

function Projects() {
  return (
    <>
      {/* head */}
      <div className=" mt-8 flex gap-4 max-w-screen-xl mx-auto px-4 py-2 rounded-md border-gray-300 border mb-4 text-gray-500">
        <div>Sort By: </div>
        <div className="flex items-center cursor-pointer">
          <span>Date Created</span>

          <ChevronDown fill="currentcolor" width="16" height="16" />
        </div>

        <div className="flex items-center cursor-pointer">
          <span>Level</span>

          <ChevronDown fill="currentcolor" width="16" height="16" />
        </div>
      </div>

      {/* projects */}
      <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
