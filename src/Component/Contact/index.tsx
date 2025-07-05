import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-pink-50 text-gray-800 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-lg">
              Whether you have a project in mind, a question, or just want to
              say hi — feel free to reach out!
            </p>

            <div className="flex items-center gap-3 text-pink-700">
              <FaEnvelope className="text-xl" />
              <a
                href="mailto:ogadimmachibuike@gmail.com"
                className="hover:underline"
              >
                ogadimmachibuike@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-pink-700">
              <FaPhoneAlt className="text-xl" />
              <a href="tel:+17038875926" className="hover:underline">
                +1 (703) 887-5926
              </a>
            </div>

            <div className="flex gap-4 text-pink-700 text-xl mt-4">
              <a
                href="https://www.linkedin.com/in/ogadimma-chibuike"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-900"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Ogad1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-900"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-xl shadow-lg p-6 space-y-4"
          >
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-full transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
