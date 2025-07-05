import { FaShieldAlt, FaCertificate, FaUserSecret } from "react-icons/fa";
import { SiSplunk, SiPython, SiHackthebox } from "react-icons/si";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import profileImg from "/images/oga.jpg";

export default function About() {
  const skills = [
    { name: "Network Security", icon: <FaShieldAlt /> },
    { name: "Threat Hunting", icon: <FaUserSecret /> },
    { name: "Splunk", icon: <SiSplunk /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Penetration Testing", icon: <SiHackthebox /> },
  ];

  const certifications = [
    "CompTIA Security+",
    "CompTIA Network+",
    "AWS Certified Cloud Practitioner",
    "Certified Ethical Hacker (CEH)",
    "Splunk Core Certified User",
    "Cybersecurity Analyst (CySA+)",
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-6 scroll-mt-20"
      style={{
        background:
          "linear-gradient(145deg, #ffe6ec 0%, #fff0f5 50%, #ffe6f2 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-12 animate-fade-in">
          About Me
        </h2>

        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 animate-fade-in-up transition duration-1000">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={profileImg}
              alt="Cyber Girl"
              className="w-64 h-64 rounded-full object-cover border-4 border-pink-300 shadow-lg"
            />
          </div>

          {/* Info */}
          <div className="flex-1 space-y-6 text-gray-800">
            {/* Bio */}
            <p className="text-lg">
              Hello! I’m Oga, a cybersecurity analyst passionate about threat
              intelligence, proactive defense, and secure system design. I
              specialize in building secure infrastructures and decoding threat
              behavior using a mix of open-source tools and enterprise-grade
              solutions.
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-pink-500 mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-pink-500" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-pink-500 mb-2 flex items-center gap-2">
                <FaCertificate className="text-pink-500" />
                Certifications
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                {certifications.map((cert, idx) => (
                  <li
                    key={idx}
                    className="bg-pink-100 text-pink-800 px-3 py-1 rounded-md text-sm font-medium"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-full mt-4 transition-all"
            >
              <BsFileEarmarkArrowDown />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
