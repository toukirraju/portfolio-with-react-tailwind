import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { skilles } from "../data";

const Skilles = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="skilles" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1"
        >
          <h2 className="h2 text-gradient">Skilles</h2>
          <h3 className="h3 mb-4">
            Transform Ideas into Stunning Web Experiences.
          </h3>
        </motion.div>

        {/* upper section  */}
        <div className="flex mb-7 flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          {/* left  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* card 1 */}
            <div>
              <h2 className="h2 text-gradient">Expertise</h2>
              <div className="flex flex-wrap gap-5 ">
                {skilles.expertise.map((skill, index) => {
                  const { name, image } = skill;
                  return (
                    <div
                      key={index}
                      className="flex justify-center items-center flex-col gap-2 shadow-md hover:bg-black/10 hover:cursor-pointer hover:duration-200 w-24  lg:w-28 p-3"
                    >
                      <img className="h-12" src={image} alt="" />
                      <span className="text-gradient text-sm">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          {/* right  */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* card 2 */}
            <div>
              <h2 className="h2 text-gradient text-right">Comfortable</h2>
              <div className="flex justify-end flex-wrap gap-5 ">
                {skilles.comfortable.map((skill, index) => {
                  const { name, image } = skill;
                  return (
                    <div
                      key={index}
                      className="flex justify-center  items-center flex-col gap-2 shadow-md hover:bg-black/10 hover:cursor-pointer hover:duration-200 w-24  lg:w-28 p-3"
                    >
                      <img className="h-12" src={image} alt="" />
                      <span className="text-gradient text-sm">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom section  */}
        <div className="flex  flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          {/* left  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* card 1 */}
            <div>
              <h2 className="h2 text-gradient">Familiar</h2>
              <div className="flex flex-wrap gap-5 ">
                {skilles.familiar.map((skill, index) => {
                  const { name, image } = skill;
                  return (
                    <div
                      key={index}
                      className="flex justify-center items-center flex-col gap-2 shadow-md hover:bg-black/10 hover:cursor-pointer hover:duration-200 w-24  lg:w-28 p-3"
                    >
                      <img className="h-12" src={image} alt="" />
                      <span className="text-gradient text-sm">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          {/* right  */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* card 2 */}
            <div>
              <h2 className="h2 text-gradient text-right">Tools</h2>
              <div className="flex justify-end flex-wrap gap-5 ">
                {skilles.tools.map((skill, index) => {
                  const { name, image } = skill;
                  return (
                    <div
                      key={index}
                      className="flex justify-center  items-center flex-col gap-2 shadow-md hover:bg-black/10 hover:cursor-pointer hover:duration-200 w-24  lg:w-28 p-3"
                    >
                      <img className="h-12" src={image} alt="" />
                      <span className="text-gradient text-sm">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skilles;
