import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Modal: React.FC<{
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isVisible, children, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      data-testid="wrapper-modal"
      onClick={handleClose}
    >
      <div className="w-[800px] flex flex-col">
        <FontAwesomeIcon
          className="text-white text-xl place-self-end pb-1 cursor-pointer"
          data-testid="close-modal"
          icon={faCircleXmark}
          width={20}
          height={20}
          onClick={() => onClose()}
        />

        <div className="bg-white p-2 rounded-lg">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
