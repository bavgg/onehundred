import { Reset, Search } from "../assets/icons";
import { tags } from "../projects";

function Navbar() {
  return (
    <div className=" p-4">
      {/* search bar */}
      <div className=" relative">
        <input
          placeholder="Search for tags"
          className="py-1 border-gray rounded-md focus:outline-blue-300 focus:border-transparent pl-7 pr-2"
        />
        <div className=" absolute top-2 left-2 text-gray-500">
          <Search fill="currentcolor" width="16" height="16" />
        </div>
      </div>

      {/* added tags */}
      <div></div>

      {/* filter by tags */}
      <div className="mt-2">
        

        <div className="flex justify-between">
            <div className="text-gray-400 mb-2 text-base">Select tags </div>
            
            {/* reset */}
            <div className="text-blue-500 flex items-center justify-center">
              <Reset fill="currentcolor" width="16" height="16" />
            </div>
        </div>

        {/* tags */}
        <div className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <div className=" cursor-pointer bg-sky-50 rounded-md p-1 text-blue-400 text-sm">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
