import { FaCalendarAlt } from "react-icons/fa";

const Educations = () => {
  return (
    <>
      <div className=" ">
        {/* <!--==================== QUALIFICATION  CONTENT 1 ====================--> */}
        <div>
          {/* <!--==================== QUALIFICATION 1 ====================--> */}
          <div className="qualification__data">
            <div>
              <h3 className="text-lg text-gradient">Software Enginner</h3>
              <span className="text-sm font-semibold text-white">
                Daffodil International University
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-400 ">
                <FaCalendarAlt />
                <span>2019-2023</span>
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          {/* <!--==================== QUALIFICATION 2 ====================--> */}
          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="text-lg text-gradient">
                Higher Secondary School Certificate (HSC)
              </h3>
              <span className="text-sm font-semibold text-white">
                Safiuddin Sarker Academy and College
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-400 ">
                <FaCalendarAlt />
                <span>2017-2018</span>
              </div>
            </div>
          </div>

          {/* <!--==================== QUALIFICATION 3 ====================--> */}
          <div className="qualification__data">
            <div>
              <h3 className="text-lg text-gradient">
                Secondary School Certificate (SSC)
              </h3>
              <span className="text-sm font-semibold text-white">
                BARI High School
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-400 ">
                <FaCalendarAlt />
                <span>2015-2016</span>
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              {/* <!-- <span className="qualification__line"></span> --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educations;
