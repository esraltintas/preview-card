"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

import Button from "../Button/Button";
import { CardProps } from "@/app/types";
import useCart from "@/app/(store)/useCart";
import Modal from "../Modal/Modal";
import CardDetails from "./CartDetail";
import ModalContent from "./ModalContent";

const Card: React.FC<{ project: CardProps }> = ({ project }) => {
  const { cart, addItemToCart, removeItemFromCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const router = useRouter();

  // Function to handle the "Add to Cart" button click
  const handleAddClick = () => {
    addItemToCart(project);
    setAddedToCart(true);
  };

  // Function to handle the "Remove from Cart" button click
  const handleRemoveClick = (projectId: number) => {
    const itemIndex = cart.findIndex((item) => item.id === projectId);

    if (itemIndex !== -1) {
      removeItemFromCart({ itemIndex });
    }
    setAddedToCart(false);
  };

  // Function to handle the card click (opens modal and updates the route)
  const handleCardClick = () => {
    router.push(`/?${project.id}`);
    setShowModal(!showModal);
  };

  // Function to handle modal close (closes modal and updates the route)
  const handleModalClose = () => {
    router.push(`/`);
    setShowModal(false);
  };

  return (
    <div className="flex flex-col rounded-md p-6 bg-slate-50 hover:bg-indigo-100">
      <div className="card-details" onClick={handleCardClick}>
        <CardDetails project={project} />
      </div>
      <div className="flex flex-row items-end justify-end gap-5">
        <div className="flex items-end justify-end">
          <Button
            className={`border border-black py-1 px-3 rounded-2xl max-w-40 mt-6 hover:bg-gray-200 ${
              addedToCart && "bg-slate-200"
            }`}
            onClick={handleAddClick}
            disabled={addedToCart}
          >
            {!addedToCart ? (
              "Add to Cart"
            ) : (
              <div className="text-slate-500">
                <FontAwesomeIcon
                  className="cursor-pointer text-lg text-green-500"
                  icon={faCheck}
                  width={20}
                  height={20}
                />
                Added
              </div>
            )}
          </Button>
        </div>
        {addedToCart && (
          <div className="flex items-end justify-end">
            <Button
              className={`border border-black py-1 px-3 rounded-2xl max-w-40 mt-6 hover:bg-gray-200 ${
                addedToCart && "bg-slate-200"
              }`}
              onClick={() => handleRemoveClick(project.id)}
              disabled={false}
            >
              Remove from Cart
            </Button>
          </div>
        )}
      </div>

      <Modal isVisible={showModal} onClose={() => handleModalClose()}>
        <ModalContent project={project} />
      </Modal>
    </div>
  );
};

export default Card;
