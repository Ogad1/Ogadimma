export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white via-pink-50 to-white relative overflow-hidden"
    >
      {/* Pink background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-200 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-pink-900 mb-4">
          Hi, I'm <span className="text-pink-600">Ogadimma Chibuike</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          Cybersecurity Specialist protecting digital systems & data from modern
          threats.
        </p>

        <a
          href="#contact"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
