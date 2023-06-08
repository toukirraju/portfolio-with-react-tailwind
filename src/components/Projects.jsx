import React from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  let content = projects?.map((project, index) => {
    const { image, preTitle, title, previewLink, codeLink } = project || {};

    return (
      <ProjectCard
        key={index}
        image={image}
        title={title}
        preTitle={preTitle}
        previewLink={previewLink}
        codeLink={codeLink}
      />
    );
  });
  return (
    <div className="grid gap-4 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {content}
    </div>
  );
};

export default Projects;
