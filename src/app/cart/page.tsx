"use client";
import React from "react";
import useCart from "../(store)/useCart";
import ModalContent from "../component/Card/ModalContent";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "../component/Button/Button";

export default function CartDetail() {
  let totalPriceCount = 0;
  let totalVolumeCount = 0;
  const { cart, removeItemFromCart } = useCart();
  const router = useRouter();

  const handleRemoveClick = (projectId: number, projectName: string) => {
    const itemIndex = cart.findIndex((item) => item.id === projectId);

    if (itemIndex !== -1) {
      removeItemFromCart({ itemIndex });
    }
  };

  const handleCheckoutClick = () => {
    router.push("/success");
  };

  return (
    <div className="flex flex-col gap-20 p-20">
      <h1 className="font-bold text-3xl">Cart</h1>
      {cart?.length !== 0 ? (
        <>
          {cart.map((project) => {
            totalPriceCount += project.price_per_ton;
            totalVolumeCount += project.offered_volume_in_tons;

            return (
              <div className="flex flex-row max-w-3xl" key={project.id}>
                <ModalContent project={project} />
                <FontAwesomeIcon
                  className="cursor-pointer text-lg"
                  icon={faTrash}
                  width={20}
                  height={20}
                  onClick={() => handleRemoveClick(project.id, project.name)}
                />
              </div>
            );
          })}
          <div className="flex flex-row gap-10 justify-between items-center">
            <div>
              <span className="font-bold pr-0.5">Total Price per Ton:</span>
              <span>{totalPriceCount}</span>
            </div>
            <div>
              <span className="font-bold pr-0.5">
                Total Offered Volume in Tons:
              </span>
              <span>{totalVolumeCount}</span>
            </div>
            <Button
              className="border border-black py-1 px-3 rounded-2xl max-w-40 hover:bg-gray-200"
              onClick={() => handleCheckoutClick()}
              disabled={false}
            >
              Checkout
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-5 p-20 justify-center items-center">
          <p className="font-medium text-xl">
            Your cart is empty, please add some project!
          </p>
          <Link className="font-medium text-lg" href="/">
            Back to home page
          </Link>
        </div>
      )}
    </div>
  );
}
