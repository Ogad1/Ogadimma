import { portfolioConfig } from "./portfolioConfig";
import "./App.css";
import Intro from "./Component/intro";
import NavBar from "./Component/Navbar";

function App() {
  const { intro, about, projects, contact } = portfolioConfig;
  console.log({ intro });
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      {/* Navigation Bar */}
      <NavBar />
      {/* Introduction Section */}
      <Intro intro={intro} />
      <section className="flex flex-col items-center py-12">
        <img
          src={intro.image}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-pink-400 shadow-lg mb-4 object-cover"
        />
        <h1 className="text-4xl font-bold text-pink-600 mb-2">{intro.name}</h1>
        <h2 className="text-xl font-semibold mb-2">{intro.tagline}</h2>
        <p className="max-w-xl text-center text-lg mb-4">{intro.description}</p>
      </section>

      {/* Projects Section */}
      <section className="py-8 bg-white rounded-xl shadow-md mx-auto max-w-4xl mb-8">
        <h2 className="text-3xl font-bold text-pink-500 mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-pink-100 rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded mb-3 border-2 border-pink-300"
              />
              <h3 className="text-xl font-semibold text-pink-700 mb-1">
                {project.title}
              </h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-pink-500 mb-4">{about.title}</h2>
        <p className="text-lg text-gray-700 bg-pink-100 rounded-lg p-6 shadow">
          {about.description}
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-500 mb-4">Contact</h2>
        <div className="flex flex-col items-center space-y-2">
          <a
            href={`mailto:${contact.email}`}
            className="text-pink-600 hover:underline font-medium"
          >
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline font-medium"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline font-medium"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
