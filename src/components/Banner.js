import image from "../assets/avatar.svg";

import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import ResumeModal from "./ResumeModal";
import { useState } from "react";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-boldd leading-[0.8] lg:text-[110px]"
            >
              <div className="flex flex-col gap-7">
                <span className="text-[45px] lg:text-[80px]">Hi!</span>
                <span className="text-[45px] lg:text-[80px]">I am </span>
                <div>
                  Toukir <span>Raju</span>
                </div>
              </div>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Software Engineer",
                  2000,
                  "Freelancer",
                  2000,
                ]}
                speed={50}
                className="text-orange-500"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm a software engineer and frontend developer. I specialize in
              creating visually appealing and efficient web experiences. Check
              out my portfolio to see my work and let's connect to discuss how
              we can work together to build something great.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button onClick={() => setIsOpen(true)} className="btn btn-lg">
                Resume
              </button>
              <ResumeModal isOpen={isOpen} setIsOpen={setIsOpen} />
              <Link
                to="work"
                smooth
                spy
                className="text-gradient btn-link cursor-pointer"
              >
                My Portfolio
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/toukir-raju/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/toukirraju"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/toukirraju007/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/toukir_raju/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/toukirraju14"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="block lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
