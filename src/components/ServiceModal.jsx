import { Modal } from "@mantine/core";
import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceModal = ({ isOpen, setIsOpen, service }) => {
  const { name: serviceName, serviceList } = service || {};
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
      onClose={() => setIsOpen(false)}
      size={"lg"}
    >
      <ServiceCard serviceName={serviceName} serviceList={serviceList} />
    </Modal>
  );
};

export default ServiceModal;
