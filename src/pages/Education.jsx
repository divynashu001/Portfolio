import { FaUniversity } from "react-icons/fa";

export default function Education() {
  return (
    <div id="education" className="pt-30 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-6 animate-fadeIn">Education</h2>
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg animate-fadeIn delay-200">
        <FaUniversity className="text-blue-400 text-6xl mx-auto mb-4" />
        <h3 className="text-2xl font-semibold">Bachelor of Technology (B.Tech) - CSE</h3>
        <p className="text-lg text-gray-300 mt-2">
          Phonics Group of Institutions, Uttarakhand Technical University
        </p>
        <p className="text-lg text-gray-400 mt-1">2020 - 2024</p>
      </div>
    </div>
  );
}
