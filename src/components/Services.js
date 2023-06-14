import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import ServiceModal from "./ServiceModal";
import { useState } from "react";
import { services } from "../data";
import servicesImg from "../assets/services.png";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({});

  const handleClick = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text and image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  mb-12  lg:mb-0 "
          >
            <div>
              <h2 className="h2 text-gradient mb-6">What I Do.</h2>
              <ul className="h3 text-base list-disc">
                <li>Make A Modern Website for a Modern Business</li>
                <li>Make A User-Friendly Website That Converts</li>
                <li>Make A Secure and Scalable Website for Your Business</li>
                <li>Make A Custom Website That Reflects Your Brand</li>
                <li>
                  Make A Website That Helps You Achieve Your Business Goals
                </li>
              </ul>
              <button className="btn btn-sm">See my work</button>
            </div>
            <div className="hidden lg:block bg-no-repeat ">
              <img src={servicesImg} className="mix-blend-lighten" alt="" />
            </div>
          </motion.div>
          {/* services  */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list  */}
            <div>
              {services?.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 ">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <button
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                        onClick={() => handleClick(service)}
                      >
                        <BsArrowUpRight />
                      </button>
                      <button
                        className="text-gradient text-sm"
                        onClick={() => handleClick(service)}
                      >
                        {link}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <ServiceModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        service={selectedService}
      />
    </section>
  );
};

export default Services;
