import { HashLink } from "react-router-hash-link";
import errorImage from "../assets/contact-image.svg";

function WorkInProgress() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-white to-[#dbe4ff] px-6">
      {" "}
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl p-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <h1 className="text-7xl font-bold text-[#354770] mb-4">403</h1>

            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Work In Progress 🚧
            </h2>

            <p className="text-gray-600 mb-8 text-lg">
              This section is currently under development. New projects and case
              studies will be available soon.
            </p>

            <HashLink
              smooth
              to="/#home"
              className="inline-block bg-[#354770] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#2d3b5f] hover:shadow-2xl transition-all duration-300"
            >
              Go To Home
            </HashLink>
          </div>

          {/* Right Side */}
          <div className="border-l border-dashed border-gray-300 pl-10">
            <img
              src={errorImage}
              alt="Work In Progress"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkInProgress;
