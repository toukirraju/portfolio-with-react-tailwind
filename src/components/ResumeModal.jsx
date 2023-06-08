import { Modal } from "@mantine/core";
import React, { useState } from "react";
// Import the main component
import { Viewer, Worker } from "@react-pdf-viewer/core";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import cv from "../assets/pdf/cv.pdf";

const ResumeModal = ({ isOpen, setIsOpen }) => {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [userCV] = useState(cv);
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
      fullScreen
      opened={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
        <div className="h-full">
          <Viewer
            fileUrl={userCV}
            plugins={[
              // Register plugins
              defaultLayoutPluginInstance,
            ]}
          />
        </div>
      </Worker>
    </Modal>
  );
};

export default ResumeModal;
