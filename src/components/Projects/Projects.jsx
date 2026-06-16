function Projects() {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description:
        "WhatsApp-like real-time chat application built using Java, Spring Boot and WebSocket.",
      image: "/chat-app.svg",
      tech: ["Java", "Spring Boot", "WebSocket", "MySQL"],
    },
    {
      title: "Learning Management System",
      description:
        "Complete LMS platform for students and instructors with course management features.",
      image: "/lms-project.svg",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Tech Insights Portfolio",
      description:
        "Modern responsive portfolio website built using React and Tailwind CSS.",
      image: "/portfolio-project.svg",
      tech: ["React", "Tailwind CSS", "JavaScript"],
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <div className="inline-block px-7 py-3 rounded-full bg-blue-100 text-[#354770] text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            🚀 My Work
        </div>

        <h2 className="text-4xl font-bold mt-3">Featured Projects</h2>

        <p className="text-gray-600 mt-4">
          Some projects I have built using modern technologies.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>

              <p className="text-gray-600 text-sm leading-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
