import { projects } from "./ProjectData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gradient-to-br from-white via-pink-50 to-white"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">Projects</h2>
        <p className="text-gray-700">
          A showcase of some of my cybersecurity-focused tools and research.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border border-pink-200 rounded-xl shadow-md p-6 text-left hover:shadow-lg hover:border-pink-300 transition duration-300 bg-white"
          >
            <h3 className="text-xl font-semibold text-pink-700 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline text-sm font-medium"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
