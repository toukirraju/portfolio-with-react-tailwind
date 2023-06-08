import { FaHandPointRight } from "react-icons/fa";

const ServiceCard = ({ serviceName, serviceList }) => {
  return (
    <div>
      <h2 className="h2 text-gradient">{serviceName}</h2>
      <ul className="text-white ">
        {serviceList?.map((serviceItem, index) => (
          <li
            key={index}
            className="flex items-center gap-5 mb-5 p-2 border-b-2 border-b-white/25"
          >
            <FaHandPointRight />
            <p>{serviceItem}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
