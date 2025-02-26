import auth from "../assets/Authentication.png";
import crud from "../assets/Crud.png";
import car from "../assets/Car.png";

const Project = () => {
  const projects = [
    {
      image: auth,
      title: "Authentication System",
      description:
        "Built a secure authentication system using JWT, bcrypt for password hashing, and Joi validation. Includes protected routes and CORS setup.",
      liveLink: "https://auht.vercel.app/",
      codeLink: "https://github.com/divynashu001/Auht-0",
    },
    {
      image: crud,
      title: "CRUD Application",
      description:
        "Developed a full-stack CRUD app with React, Node.js, and Express.js. Uses RESTful APIs, React Router, and Axios for seamless data management.",
      liveLink: "https://mern-one-amber.vercel.app/",
      codeLink: "https://github.com/divynashu001/MERN",
    },
    {
      image: car,
      title: "Car Showcase Website",
      description:
        "Created a sleek, responsive car showcase website with React and Vite. Features sections like Home, Services, Contact, and About Us.",
      liveLink: "https://car-app-mocha.vercel.app/",
      codeLink: "https://github.com/divynashu001/car-app",
    },
  ];

  return (
    <div id="projects" className="pt-30 bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold mb-6 animate-fadeIn">
        Projects
      </h1>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
        Here are some of the projects I’ve built using modern web technologies.
      </p>
      <div className="flex justify-center flex-wrap gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-80 bg-black rounded-md shadow-lg hover:scale-105 shadow-blue-400 transition-transform duration-500"
          >
            <img
              className="h-48 w-full object-cover rounded-t-md"
              src={project.image}
              alt={project.title}
            />
            <div className="text-gray-400 border-t border-gray-600 px-4 py-3">
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
            <div className="flex justify-between mx-4 my-3">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-violet-600 px-5 py-2 rounded-xl hover:bg-violet-500 transition">
                  View
                </button>
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-violet-600 px-5 py-2 rounded-xl hover:bg-violet-500 transition">
                  Source
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
