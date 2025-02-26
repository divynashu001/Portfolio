import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux, SiTypescript, SiMysql } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  ];

  return (
    <div id="skills" className="pt-30 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-6 animate-fadeIn">Skills & Tech Stack</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto animate-fadeIn delay-200">
        Here are the technologies I work with to build modern and scalable applications.
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-4xl mx-auto animate-fadeIn delay-400">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
