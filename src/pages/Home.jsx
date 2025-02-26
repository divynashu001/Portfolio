export default function Home() {
    return (
      <div id="home" className="pt-30 flex flex-col items-center text-center bg-gray-900 text-white">
        <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Hi, I'm Divyanshu Dhiman</h1>
        <h2 className="text-2xl font-light mb-6 animate-fadeIn delay-200">
          MERN Stack Developer | Passionate about Web Development
        </h2>
        <p className="text-lg max-w-2xl mb-6 animate-fadeIn delay-400">
          I specialize in building modern, scalable web applications using MongoDB, Express.js, React, and Node.js. 
          Check out my projects and let's connect!
        </p>
        <div className="flex space-x-4 animate-fadeIn delay-600">
          <a href="#projects" className="px-6 py-3 bg-blue-600 rounded-2xl text-white hover:bg-blue-500 transition">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-white rounded-2xl hover:bg-white hover:text-gray-900 transition">
            Hire Me
          </a>
        </div>
      </div>
    );
  }
  