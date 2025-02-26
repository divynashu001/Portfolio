import React from "react";
import { FaDownload } from "react-icons/fa";
import resumePDF from "../assets/DivyanshuDhiman_MernResume.pdf"; // Ensure your resume is in the assets folder

const Resume = () => {
  return (
    <section id="resume" className="pt-30 bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 animate-fadeIn">Resume</h1>
        <p className="text-lg text-gray-300">
          Download my resume to explore my skills and experience.
        </p>
      </div>

      <div className="flex justify-center mt-6">
        <a
          href={resumePDF}
          download="Divyanshu_Dhiman_Resume.pdf"
          className="bg-fuchsia-600 px-6 py-3 rounded-xl flex items-center gap-2 text-xl font-semibold hover:bg-fuchsia-700 transition-all"
        >
          <FaDownload /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
