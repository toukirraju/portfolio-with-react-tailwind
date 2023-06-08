import { Modal } from "@mantine/core";
import React from "react";
import Educations from "./Educations";

const EducationModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      classNames={{
        header: "bg-transparent ",
        root: "bg-transparent",
        content: "bg-black bg-opacity-75",
        close: "modal__close",
      }}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={isOpen}
      onClose={() => setIsOpen(false)}
      size={"lg"}
    >
      <Educations />
    </Modal>
  );
};

export default EducationModal;
