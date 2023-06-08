import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { useState } from "react";
import EducationModal from "./EducationModal";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text  */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-gradient">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Feelance Front-end Developer with over 3 years of
              experience.
            </h3>
            <p className="mb-6">
              My objective is to apply my technical skills and creativity as a
              software engineer or web developer in an innovative organization.
              Seeking a challenging opportunity to learn and grow as a
              professional while delivering exceptional results. Ultimately, I
              aspire to become a respected industry expert known for solving
              complex problems.
            </p>

            {/* stats 1 */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}{" "}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Copleted
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={5} /> : null}{" "}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center ">
              <button className="btn btn-lg" onClick={() => setIsOpen(true)}>
                Educations
              </button>
              <EducationModal isOpen={isOpen} setIsOpen={setIsOpen} />
              <Link
                to="work"
                smooth
                className="text-gradient btn-link cursor-pointer"
              >
                My Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
