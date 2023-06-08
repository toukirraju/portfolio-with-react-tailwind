import React from "react";

const ProjectCard = ({ image, preTitle, title, previewLink, codeLink }) => {
  return (
    <div className="group relative overflow-hidden border-2 border-wh/50 rounded-xl">
      <div>
        {/* overlay */}
        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all divide-purple-300"></div>
        {/* img  */}
        <img
          src={image}
          alt=""
          className="group-hover:scale-125 transition-all duration-300"
        />
        {/* pretitle */}
        <div className="absolute -bottom-full left-12 group-hover:bottom-9 lg:group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient">{preTitle}</span>
        </div>
        {/* title */}
        <div className="absolute -bottom-full left-12 group-hover:bottom-3 lg:group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-3xl text-white">{title}</span>
        </div>
        {/* Preview button */}
        <div className="absolute flex gap-2 -bottom-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:bottom-14 transition-all duration-700 z-50">
          <button className="btn btn-sm">Preview</button>
          <button className="btn btn-sm">Code</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
