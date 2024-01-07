"use client";

import React, { useState } from "react";
import Button from "../Button/button";
import { CardProps } from "@/app/types";
import useCart from "@/app/(store)/store";
import Modal from "../Modal/modal";
import CardDetails from "./cartDetail";
import ModalContent from "./modalContent";

const Card: React.FC<{ project: CardProps }> = ({ project }) => {
  const { addItemToCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    addItemToCart(project);
  };

  const handleCardClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col rounded-md p-6 bg-slate-50 hover:bg-indigo-100">
      <div className="card-details" onClick={handleCardClick}>
        <CardDetails project={project} />
      </div>
      <div className="flex items-end justify-end">
        <Button
          className="border border-black py-1 px-3 rounded-2xl max-w-40 mt-6 hover:bg-gray-200"
          onClick={handleClick}
        >
          Add to Cart
        </Button>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <ModalContent project={project} />
      </Modal>
    </div>
  );
};

export default Card;
