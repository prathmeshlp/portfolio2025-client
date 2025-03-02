import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="w-full fixed z-10 top-0"
    >
      <div className="container flex justify-between items-center p-4 text-black bg-white min-w-full bg-custom-dark-gradient-latest">
        <h1 className="text-2xl font-bold">Prathmesh Mulhar</h1>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <a href="#skills" className="hover:text-secondary">Skills</a>
          <a href="#experience" className="hover:text-secondary">Experience</a>
          <a href="#education" className="hover:text-secondary">Education</a>
          <a href="#contact" className="hover:text-secondary">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;