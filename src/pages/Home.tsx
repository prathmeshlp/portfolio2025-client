import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchResume } from "../redux/resumeSlice";
import { RootState } from "../redux/store";

const Home = () => {
  const dispatch = useDispatch();
  const { data: resume, loading, error } = useSelector((state: RootState) => state.resume);

  useEffect(() => {
    dispatch(fetchResume() as any);
  }, [dispatch]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6 bg-white mt-10 bg-custom-dark-gradient-latest">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center py-16 text-black
          rounded-lg shadow-lg bg-custom-dark-gradient-latest"
      >
        <h1 className="text-4xl font-bold">{resume?.name}</h1>
        <p className="text-lg mt-2">Full Stack Developer | MERN Enthusiast</p>
        <p className="mt-4">{resume?.email} | {resume?.phone}</p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="mt-10"
      >
        <h2 className="text-3xl font-semibold text-primary text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center ">
          {resume?.skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className=" p-4 rounded-lg shadow-md text-center hover:bg-blue-100 bg-custom-dark-gradient-latest text-black"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section id="experience" initial={{ x: 100 }} animate={{ x: 0 }} className="mt-10  p-4 rounded-md">
        <h2 className="text-3xl font-semibold text-primary text-center">Experience</h2>
        {resume?.experience.map((exp, index) => (
          <div key={index} className=" p-6 mt-4 rounded-lg shadow-md text-center bg-custom-dark-gradient-latest text-black">
            <h3 className="text-xl font-bold">{exp.title} @ {exp.company}</h3>
            <p className="">{exp.duration}</p>
            <p className="mt-2">{exp.skills.join(", ")}</p>
          </div>
        ))}
      </motion.section>

      {/* Education Section */}
      <motion.section id="education" initial={{ y: 100 }} animate={{ y: 0 }} className="mt-10  p-4 rounded-md">
        <h2 className="text-3xl font-semibold text-primary text-center">Education</h2>
        {resume?.education.map((edu, index) => (
          <div key={index} className=" p-6 mt-4 rounded-lg shadow-md text-center bg-custom-dark-gradient-latest text-black">
            <h3 className="text-xl font-bold ">{edu.degree}</h3>
            <p className="">{edu.institution} | {edu.duration}</p>
          </div>
        ))}
      </motion.section>

      {/* Contact/Links Section */}
      <motion.section
        id="contact"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-10"
      >
        <h2 className="text-3xl font-semibold text-primary text-center">Connect With Me</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6 ">
          {resume?.links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className=" p-4 rounded-lg shadow-md text-center  hover:bg-blue-100 
              transition-color bg-custom-dark-gradient-latest text-black"
            >
              <span className="font-semibold">{link.label}</span>
              <p className="text-sm mt-1">{link.url}</p>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;