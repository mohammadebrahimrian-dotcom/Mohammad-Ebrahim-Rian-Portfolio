// src/components/Projects.jsx
import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    title: "AWCC Telecom Management System",
    description:
      "A Laravel-based telecom management system featuring customer and SIM card management, billing, services, authentication, role-based access control, an administrative dashboard, and report exports.",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript", "RBAC", "RESTful CRUD"],
    github: null,
    live: null,
    featured: true,
    color: "from-emerald-500/20 to-cyan-500/20",
    borderColor: "border-emerald-500/20",
    icon: "📡",
  },
  {
    title: "File Encryption & Decryption",
    description:
      "A Python desktop application for securely encrypting and decrypting files using Fernet symmetric encryption, with a graphical interface, key management, error handling, and original file preservation.",
    tags: ["Python", "Cryptography", "Fernet", "Desktop GUI", "File Security"],
    github: null,
    live: null,
    featured: true,
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/20",
    icon: "🔐",
  },
  {
    title: "Bank Management System",
    description:
      "An academic database project focused on banking operations, OLTP requirements, entity relationship modeling, relational database design, SQL Server implementation, and data warehousing concepts. Currently in development.",
    tags: [
      "SQL Server",
      "Database Design",
      "ERD",
      "OLTP",
      "OLAP",
      "Data Warehouse",
    ],
    github: null,
    live: null,
    featured: true,
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/20",
    icon: "🏦",
  },
  {
    title: "OPNsense Firewall Security Lab",
    description:
      "A virtual network security lab using OPNsense, VMware, Kali Linux, and Ubuntu to explore firewall configuration, network segmentation, DHCP, traffic filtering, and secure network communication.",
    tags: [
      "OPNsense",
      "VMware",
      "Kali Linux",
      "Ubuntu",
      "Firewall",
      "Network Security",
    ],
    github: null,
    live: null,
    featured: true,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/20",
    icon: "🛡️",
  },
  {
    title: "MPLS Enterprise Network Lab",
    description:
      "A Cisco networking lab developed in GNS3 to practice enterprise network topology design, MPLS, routing configurations, connectivity testing, and network troubleshooting.",
    tags: ["Cisco IOS", "GNS3", "MPLS", "Routing", "TCP/IP", "Troubleshooting"],
    github: null,
    live: null,
    featured: true,
    color: "from-teal-500/20 to-green-500/20",
    borderColor: "border-teal-500/20",
    icon: "🌐",
  },
  {
    title: "DVWA Web Security Lab",
    description:
      "A controlled cybersecurity laboratory using Kali Linux, Apache, MariaDB, PHP, and DVWA to study SQL injection vulnerabilities, database permissions, and secure coding with prepared statements.",
    tags: [
      "Kali Linux",
      "DVWA",
      "SQL Injection",
      "MariaDB",
      "PHP",
      "Web Security",
    ],
    github: null,
    live: null,
    featured: true,
    color: "from-violet-500/20 to-fuchsia-500/20",
    borderColor: "border-violet-500/20",
    icon: "🔎",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern responsive personal portfolio built with React, Vite, and Tailwind CSS to present networking and cybersecurity skills, academic projects, technical experience, and contact information.",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript", "Responsive Design"],
    github: null,
    live: null,
    featured: false,
    color: "from-violet-500/20 to-fuchsia-500/20",
    borderColor: "border-violet-500/20",
    icon: "💻",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <span className="font-medium tracking-widest uppercase text-neon-sm">
            Projects
          </span>
          <h2 className="mt-3 mb-4 text-4xl font-bold md:text-5xl font-display">
            <span className="text-white">Featured </span>
            <span className="text-gradient">Work</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            A selection of my academic projects and practical labs in
            networking, cybersecurity, software development, and database
            systems.
          </p>
        </div>

        {/* Filter */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex justify-center gap-3 mb-12"
        >
          {["all", "featured"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                filter === f
                  ? "bg-linear-to-r from-neon to-neon-blue text-dark-900 shadow-lg shadow-neon/20"
                  : "glass-card text-gray-400 hover:text-white hover:bg-white/4"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${
                project.featured && i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.color}`}
              />
              <div
                className={`absolute inset-0 border ${project.borderColor} rounded-3xl`}
              />

              {/* Content */}
              <div className="relative flex flex-col h-full p-6 min-h-70">
                {/* Project Icon/Preview */}
                <div className="flex items-center justify-center mb-4 text-2xl w-14 h-14 rounded-2xl glass-card">
                  {project.icon}
                </div>

                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-white transition-colors font-display group-hover:text-neon">
                    {project.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-gray-300 rounded-full glass-card"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Academic Project / Lab</span>
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="flex items-center justify-center text-gray-400 rounded-lg w-9 h-9 glass-card hover:text-neon"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live`}
                        className="flex items-center justify-center text-gray-400 rounded-lg w-9 h-9 glass-card hover:text-neon"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                {(project.live || project.github) && (
                  <div
                    className={`absolute inset-0 rounded-3xl transition-opacity duration-300 ${
                      hoveredIndex === i ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-dark-900 via-dark-900/50 to-transparent rounded-3xl" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <a
                        href={project.live || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 transition-all bg-white rounded-full text-dark-900 font-semibold hover:shadow-xl"
                      >
                        <Eye className="w-4 h-4" />
                        View Project
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div data-aos="fade-up" className="mt-12 text-center">
          <a
            href="https://github.com/mohammadebrahimrian-dotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full glass-card text-white font-semibold inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
