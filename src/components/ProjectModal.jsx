import { Modal } from "@mantine/core";
import React from "react";
import Projects from "./Projects";

const ProjectModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      classNames={{
        header: "bg-transparent ",
        root: "bg-transparent",
        content: "bg-black bg-opacity-70",
        close: "modal__close",
      }}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={isOpen}
      fullScreen
      onClose={() => setIsOpen(false)}
    >
      <Projects />
    </Modal>
  );
};

export default ProjectModal;
