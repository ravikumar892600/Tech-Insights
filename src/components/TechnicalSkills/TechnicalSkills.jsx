import { Code2, Database, Monitor, Server, Wrench } from "lucide-react";

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-blue-100 text-[#354770] text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300">
          ⚡ My Expertise
        </div>

        <h2 className="text-4xl font-bold mt-3">Technical Skills</h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Technologies and tools I use to build modern, scalable and responsive
          web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Programming Languages */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
            <Code2 className="text-[#354770]" />
          </div>

          <h3 className="text-xl font-bold mb-4">Programming Languages</h3>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Java
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              SQL
            </span>
          </div>
        </div>

        {/* Frontend */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
            <Monitor className="text-[#354770]" />
          </div>

          <h3 className="text-xl font-bold mb-4">Frontend</h3>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              HTML
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              CSS
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Tailwind CSS
            </span>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
            <Server className="text-[#354770]" />
          </div>

          <h3 className="text-xl font-bold mb-4">Backend</h3>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Node.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Express.js
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              REST API
            </span>
          </div>
        </div>

        {/* Database */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
            <Database className="text-[#354770]" />
          </div>

          <h3 className="text-xl font-bold mb-4">Database</h3>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              MongoDB
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              MySQL
            </span>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
            <Wrench className="text-[#354770]" />
          </div>

          <h3 className="text-xl font-bold mb-4">Tools</h3>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Git
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              GitHub
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              VS Code
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Postman
            </span>
          </div>
        </div>

        {/* DSA */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
            <Code2 className="text-[#354770]" />
          </div>

          <h3 className="text-xl font-bold mb-4">Problem Solving & DSA</h3>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Arrays
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Strings
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Linked List
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Stack
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              Queue
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
