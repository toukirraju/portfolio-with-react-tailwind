import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import img1 from "../assets/projects thamnails.png";
import img2 from "../assets/projects thamnails (1).png";
import img3 from "../assets/projects thamnails (2).png";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text  */}
            <div>
              <h2 className="h2 leading-tight text-gradient">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-9">
                I'm a web developer who creates captivating and unforgettable
                online experiences. Let me help you elevate your online presence
                and engage users with my innovative approach to web development.
              </p>
              <button onClick={() => setIsOpen(true)} className="btn btn-sm">
                View all projects
              </button>
              <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            {/* image  */}
            {/* card 1 */}
            <ProjectCard
              image={img1}
              preTitle={"Web Application"}
              title={"HomiFy"}
            />
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* card 2 */}

            <ProjectCard
              image={img2}
              preTitle={"UI Design"}
              title={"Financial App"}
            />
            {/* card 3 */}

            <ProjectCard
              image={img3}
              preTitle={"Web Application"}
              title={"Learning Portal"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
