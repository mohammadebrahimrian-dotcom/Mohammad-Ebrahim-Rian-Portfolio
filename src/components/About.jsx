import { Code, Palette, Rocket, Users, Zap } from "lucide-react";
import profileImage from "../assets/images/rian.png";

const stats = [
  { value: "7th", label: "Semester Student" },
  { value: "5+", label: "Academic Projects & Labs" },
  { value: "2", label: "Core Focus Areas" },
  { value: "10+", label: "Technologies Learned" },
];

const highlights = [
  {
    icon: Code,
    title: "Network Engineering",
    desc: "Designing, configuring, and troubleshooting computer networks using Cisco technologies, GNS3, and routing protocols.",
  },
  {
    icon: Palette,
    title: "Cybersecurity",
    desc: "Exploring network protection, firewall configuration, traffic analysis, and security testing with OPNsense, Wireshark, and Kali Linux.",
  },
  {
    icon: Rocket,
    title: "Software Development",
    desc: "Building practical applications using Python, Laravel, PHP, JavaScript, MySQL, and SQL Server.",
  },
  {
    icon: Users,
    title: "Continuous Learning",
    desc: "Continuously developing technical skills through academic projects, hands-on networking labs, and cybersecurity studies.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          data-aos="fade-up"
          className="mb-16 text-center section-title section-text"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-neon">
            About Me
          </span>
          <h2 className="mt-3 mb-4 text-2xl font-bold md:text-5xl font-display">
            <span className="text-white">Learning</span>
            <span className="text-gradient"> Building & Growing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Computer Science student specializing in Networking, passionate
            about network engineering, cybersecurity, software development, and
            building secure and reliable technology solutions.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Image/Visual */}
          <div data-aos="fade-right" data-aos-duration="800">
            <div className="relative">
              <div
                className="
    relative
    w-full
    min-h-[430px]
    sm:min-h-[520px]
    lg:min-h-[620px]
    rounded-3xl
    glass-card
    overflow-hidden
  "
              >
                <div className="absolute inset-0 bg-linear-to-br from-[#00ff88]/10 via-transparent to-[#b44dff]/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="
    mx-auto mb-6
    w-60 h-60
    sm:w-60 sm:h-60
    md:w-70 md:h-70
    lg:w-80 lg:h-80
    xl:w-100 xl:h-100
    overflow-hidden
    rounded-[10%]
    border-2 border-[#00ff88]
    shadow-2xl shadow-[#00ff88]/20
    bg-[#111118]
    shrink-0
  "
                    >
                      <img
                        src={profileImage}
                        alt="Mohammad Ebrahim Rian"
                        className="object-center w-full h-full object-fit "
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl font-display">
                      Mohammad Ebrahim Rian
                    </h3>
                    <p className="text-gray-400">
                      Network Engineer & Cybersecurity Specialist
                    </p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute items-center justify-center hidden w-16 h-16 top-4 right-4 sm:flex lg:w-20 lg:h-20 rounded-2xl glass-card">
                  <Code className="w-8 h-8 text-[#00ff88]" />
                </div>
                <div className="absolute items-center justify-center hidden bottom-4 left-4 sm:flex w-14 h-14 lg:w-16 lg:h-16 rounded-2xl glass-card">
                  <Zap className="w-6 h-6 text-[#ffdd57]" />
                </div>
              </div>
              {/* Glow effect behind */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#00ff88]/10 via-[#00d4ff]/10 to-[#b44dff]/10 blur-2xl -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div data-aos="fade-left" data-aos-duration="800">
            <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl font-display">
              A dedicated network engineer with a{" "}
              <span className="text-gradient">passion for cybersecurity</span>
            </h3>
            <p className="mb-6 leading-relaxed text-gray-400">
              I am Mohammad Ebrahim Rian, a Computer Science student in the
              Networking Department at Kandahar University. I am passionate
              about computer networking, cybersecurity, software development,
              and database systems. I enjoy designing secure networks,
              developing practical applications, and solving technical
              challenges through hands-on learning.
            </p>
            <p className="mb-8 leading-relaxed text-gray-400">
              My technical interests include Cisco routing and switching, MPLS,
              GNS3, OPNsense firewalls, Wireshark, Kali Linux, Python, Laravel,
              MySQL, and Microsoft SQL Server. Through academic projects and
              virtual networking laboratories, I continuously strengthen my
              knowledge of network infrastructure, security, programming, and
              database technologies.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                  className="p-4 transition-all duration-300 rounded-2xl glass-card glass-card-hover"
                >
                  <item.icon className="w-6 h-6 text-[#00ff88] mb-2" />
                  <h4 className="mb-1 text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-2 gap-6 mt-16 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative p-6 overflow-hidden text-center rounded-2xl glass-card shimmer"
            >
              <div className="mb-1 text-3xl font-bold md:text-4xl font-display text-gradient">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
