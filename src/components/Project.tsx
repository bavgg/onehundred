import { ExternalLink } from "../assets/icons";

type ProjectProps = {
  project: {
    name: string;
    description: string;
    tags: string[];
  };
};

function Project({ project }: ProjectProps) {
  return (
    <div className=" p-4 rounded-md border-gray-300 border max-w-1/2">

      {/* project name */}
      <a
        href="https://google.com"
        target="_blank"
        className="flex gap-1 underline text-blue-500"
      >
        <span className=" font-[700]">{project.name}</span>
        <ExternalLink fill="currentcolor" width="16" height="16" />
      </a>

      {/* desccription */}
      <span className=" text-base text-gray-500 font-[400]">{project.description}</span>

      {/* tags */}
      <div className="flex flex-wrap gap-4">
        {project.tags.map((tag) => (
          <div className=" bg-sky-50 rounded-md p-1 text-blue-400 text-sm">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
