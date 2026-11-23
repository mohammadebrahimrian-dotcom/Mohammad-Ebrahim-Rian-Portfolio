import React from "react";

import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      year: "Present",
      title: "Bachelor of Computer Science",
      place: "Faculty of Computer Science, Kandahar University",
      description:
        "Currently pursuing a Bachelor's degree in Computer Science, specializing in Networking. My academic studies focus on computer networks, network security, routing and switching, database systems, programming, and cybersecurity. I strengthen my technical knowledge through hands-on laboratories and practical projects involving Cisco networking, GNS3, OPNsense, VMware, Python, and SQL Server.",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen px-6 py-24"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="font-semibold tracking-widest uppercase text-[#00ff88]">
            Education
          </p>

          <h2 className="mt-3 text-4xl font-black text-black md:text-5xl dark:text-white">
            Academic Journey
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-500 dark:text-gray-400">
            My academic background and continuous learning journey that shaped
            my technical foundation and career path.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 border-l-2 border-[#00ff88]">
          {educationData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={index * 150}
              className="relative mb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-[#00ff88] shadow-lg shadow-[#00ff88]/30" />

              {/* Card */}
              <div className="p-6 transition-all duration-300 bg-white shadow-lg dark:bg-[#111118] rounded-2xl hover:-translate-y-1">
                <span className="font-semibold text-[#00ff88]">
                  {item.year}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-black dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  {item.place}
                </p>

                <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
