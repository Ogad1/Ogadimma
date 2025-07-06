import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-gray-700 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ogadimma Chibuike. All rights
          reserved.
        </p>

        <div className="flex gap-4 text-pink-600 text-lg">
          <a
            href="https://www.linkedin.com/in/ogadimma-chibuike"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-800"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Ogad1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-800"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
