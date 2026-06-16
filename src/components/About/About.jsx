import { Coffee, GraduationCap, Layers3, Lightbulb } from "lucide-react";

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      {/* Heading */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-blue-100 text-[#354770] text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300">
          👨‍💻 About Me
        </div>

        <h2 className="text-4xl font-bold mt-3">
          Turning Ideas Into Digital Solutions
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 mt-6 leading-8">
          I am a passionate Java & Full Stack Developer pursuing B.Tech in
          Information Technology. I enjoy building responsive web applications,
          solving programming challenges and continuously learning new
          technologies.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition text-center">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Coffee className="text-[#354770]" />
          </div>

          <h3 className="font-bold text-lg">Java Developer</h3>

          <p className="text-gray-600 mt-3 text-sm leading-6">
            Building robust backend logic with Java, OOP and problem-solving
            skills.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition text-center">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Layers3 className="text-[#354770]" />
          </div>

          <h3 className="font-bold text-lg">Full Stack Developer</h3>

          <p className="text-gray-600 mt-3 text-sm leading-6">
            Developing end-to-end applications using React, Node.js and MongoDB.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition text-center">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Lightbulb className="text-[#354770]" />
          </div>

          <h3 className="font-bold text-lg">Problem Solver</h3>

          <p className="text-gray-600 mt-3 text-sm leading-6">
            Strong DSA and logical thinking for solving coding challenges.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition text-center">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <GraduationCap className="text-[#354770]" />
          </div>

          <h3 className="font-bold text-lg">Continuous Learner</h3>

          <p className="text-gray-600 mt-3 text-sm leading-6">
            Always exploring modern tools, frameworks and technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
