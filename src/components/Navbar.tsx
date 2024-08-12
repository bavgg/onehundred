import { Reset, Search } from "../assets/icons";
import { tags } from "../projects";

function Navbar() {
  return (
    <div className=" p-4">
      {/* search bar */}
      <div className=" relative">
        <input
          placeholder="Search for tags"
          className=" border-gray rounded-sm focus:outline-none pl-6 pr-2"
        />
        <div className=" absolute top-1 left-1">
          <Search fill="currentcolor" width="16" height="16" />
        </div>
      </div>

      {/* added tags */}
      <div></div>

      {/* filter by tags */}
      <Reset fill="currentcolor" width="16" height="16" />
      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <div className=" bg-sky-50 rounded-md p-1 text-blue-400 text-sm">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
