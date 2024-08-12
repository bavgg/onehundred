import { projects } from "../projects";

import Project from "./Project";

function Projects() {
  return (
    <div className="flex flex-col gap-4 max-w-screen-lg mx-auto">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
