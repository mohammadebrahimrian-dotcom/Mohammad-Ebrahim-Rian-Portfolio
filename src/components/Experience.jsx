import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  Building2,
  FileText,
} from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Network Engineering & MPLS Labs",
    company: "Academic Networking Projects",
    location: "Kandahar, Afghanistan",
    period: "Academic Projects",
    description:
      "Designed, configured, and tested simulated computer networks using Cisco IOS and GNS3, focusing on routing, switching, MPLS, and network troubleshooting.",
    highlights: [
      "Configured Cisco routers and tested network connectivity",
      "Practiced MPLS networking and routing configurations",
      "Troubleshot network connectivity using practical testing tools",
    ],
    tech: ["Cisco IOS", "GNS3", "MPLS", "Routing", "Switching"],
    color: "border-l-[#00d4ff]",
    glow: "shadow-[#00d4ff]/10",
  },
  {
    type: "work",
    title: "Cybersecurity & Firewall Labs",
    company: "Computer and Network Security Coursework",
    location: "Kandahar, Afghanistan",
    period: "Academic Labs",
    description:
      "Completed hands-on cybersecurity laboratories involving virtual networks, firewall configuration, security analysis, and network traffic monitoring.",
    highlights: [
      "Configured virtual networks using VMware and OPNsense",
      "Practiced firewall policies and network traffic filtering",
      "Explored network security testing using Kali Linux and Wireshark",
    ],
    tech: ["OPNsense", "VMware", "Kali Linux", "Wireshark", "Ubuntu"],
    color: "border-l-[#00d4ff]",
    glow: "shadow-[#00d4ff]/10",
  },
  {
    type: "work",
    title: "Laravel Web Application Development",
    company: "AWCC Telecom Management System",
    location: "Kandahar, Afghanistan",
    period: "Academic Project",
    description:
      "Developed a telecom management web application using Laravel, PHP, and MySQL, implementing database-driven management features and administrative functionality.",
    highlights: [
      "Implemented customer, SIM card, billing, and service management",
      "Developed authentication and role-based access control",
      "Built an administrative dashboard and reporting features",
    ],
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Git"],
    color: "border-l-[#00ff88]",
    glow: "shadow-[#00ff88]/10",
  },
  {
    type: "work",
    title: "Python Security Application Development",
    company: "File Encryption and Decryption Project",
    location: "Kandahar, Afghanistan",
    period: "Academic Project",
    description:
      "Developed a Python desktop application for securely encrypting and decrypting files using cryptographic techniques and a graphical user interface.",
    highlights: [
      "Implemented file encryption and decryption functionality",
      "Developed a desktop graphical user interface",
      "Tested file integrity and preserved original files",
    ],
    tech: ["Python", "Cryptography", "Desktop GUI", "File Security"],
    color: "border-l-[#b44dff]",
    glow: "shadow-[#b44dff]/10",
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "Kandahar University",
    location: "Kandahar, Afghanistan",
    period: "Present",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science, specializing in Networking, with academic studies and practical laboratories in networking, cybersecurity, programming, and database systems.",
    highlights: [
      "Studying computer networking and network security",
      "Building practical networking and cybersecurity laboratories",
      "Developing software and database projects",
    ],
    tech: [
      "Networking",
      "Cybersecurity",
      "Database Systems",
      "Software Development",
    ],
    color: "border-l-[#ffdd57]",
    glow: "shadow-[#ffdd57]/10",
  },
];

const resumeAvailable = false;

const Experience = () => {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <span className="text-[#00ff88] text-sm font-medium tracking-widest uppercase">
            Experience
          </span>
          <h2 className="mt-3 mb-4 text-4xl font-bold md:text-5xl font-display">
            <span className="text-white">My </span>
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            A timeline of academic growth, hands-on technical experience,
            networking laboratories, and software development projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff88]/50 via-[#00d4ff]/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className={`relative pl-10 md:pl-16 border-l-2 ${exp.color} transition-all duration-300 hover:shadow-lg ${exp.glow}`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[9px] md:-left-[9px] top-2 w-4 h-4 rounded-full border-2 ${
                    exp.type === "education"
                      ? "border-[#ffdd57] bg-[#ffdd57]/20"
                      : "border-[#00ff88] bg-[#00ff88]/20"
                  }`}
                >
                  <div
                    className={`absolute inset-1 rounded-full ${
                      exp.type === "education" ? "bg-[#ffdd57]" : "bg-[#00ff88]"
                    }`}
                  />
                </div>

                <div className="p-6 rounded-2xl glass-card">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === "education"
                          ? "bg-[#ffdd57]/10 text-[#ffdd57]"
                          : "bg-[#00ff88]/10 text-[#00ff88]"
                      }`}
                    >
                      {exp.type === "education" ? (
                        <GraduationCap className="inline w-3 h-3 mr-1" />
                      ) : (
                        <Briefcase className="inline w-3 h-3 mr-1" />
                      )}
                      {exp.type === "education"
                        ? "Education"
                        : "Projects & Labs"}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                  </div>

                  <h3 className="mb-1 text-xl font-bold text-white font-display">
                    {exp.title}
                  </h3>
                  <p className="text-[#00ff88] font-medium mb-3 flex items-center gap-1">
                    <Building2 className="w-4 h-4" /> {exp.company}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  {exp.highlights.length > 0 && (
                    <ul className="mb-4 space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-1.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Tags */}
                  {exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] text-xs text-gray-400 border border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download */}
        {resumeAvailable && (
          <div data-aos="fade-up" className="mt-16 text-center">
            <a
              href="/Mohammad_Ebrahim_Rian_Resume.pdf"
              download
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-[#0a0a0f] font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Download Full Resume
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
