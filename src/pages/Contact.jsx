import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaArrowUp } from "react-icons/fa";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const templateParams = {
    to_name: "Tanuj",
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   emailjs
  .send(
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_PUBLIC_KEY
  )
  .then(
    () => {
      console.log("Form Submitted", formData);
      setFormData({ name: "", email: "", message: "" });
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
    
  };

  return (
    <div id="contact" className="pt-30 px-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 animate-fadeIn text-center drop-shadow-md">
        Contact Me
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
        Have a project in mind or just want to say hello? Feel free to reach
        out!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-25">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md"
        >
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 transition py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Social Links */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-gray-300 mb-3 flex items-center justify-center gap-2">
            <FaEnvelope className="text-fuchsia-400" />{" "}
            divyanshudhiman41@gmail.com
          </p>
          <p className="text-gray-300 mb-6 flex items-center justify-center gap-2">
            <FaPhone className="text-fuchsia-400" /> +91 9627751009
          </p>

          <div className="flex justify-center gap-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/divyanshudhiman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-fuchsia-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/divynashu001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-fuchsia-500 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end">
        <a href="#home">
          <button className="bg-slate-700 cursor-pointer px-3 py-3 hover:scale-115 rounded-full mt-10 mb-5">
          <FaArrowUp className="font-bold text-md"/>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
