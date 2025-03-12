export default function About() {
  return (
    <div id="about" className="pt-30 bg-gray-900 text-white flex flex-col items-center text-center px-6">
      <h2 className="text-4xl font-bold mb-6 animate-fadeIn">About Me</h2>
      <div className="max-w-3xl animate-fadeIn delay-200">
        <p className="text-lg mb-4">
          Hi! I'm <span className="text-blue-400 font-semibold">Divyanshu Dhiman</span>, a passionate MERN Stack Developer 
          based in Noida, India. I specialize in building modern and efficient web applications using 
          <span className="text-blue-400"> MongoDB, Express.js, React, and Node.js.</span>
        </p>
        <p className="text-lg mb-4">
          I recently completed my <span className="text-blue-400">B.Tech in Computer Science Engineering</span> and have worked on various 
          projects, including a CRUD app and a furniture showcase platform.
        </p>
        <p className="text-lg">
          I'm always eager to learn new technologies, solve real-world problems, and collaborate on exciting projects. 
          Currently, I'm improving my skills in <span className="text-blue-400">Redux, TypeScript, and Backend Development.</span>
        </p>
      </div>
      <div className="mt-6 animate-fadeIn delay-400">
        <a href="#projects" className="px-6 py-3 bg-blue-600 rounded-2xl text-white hover:bg-blue-500 transition">
          My Projects
        </a>
      </div>
    </div>
  );
}
