"use client";

import useCart from "../(store)/store";
import ModalContent from "../component/Card/modalContent";
import Link from "next/link";
export default function CartDetail() {
  const { cart } = useCart();
  console.log(cart.length);
  return (
    <div className="flex flex-col gap-20 p-20">
      {cart?.length !== 0 ? (
        cart.map((project) => (
          <ModalContent key={project.id} project={project} />
        ))
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
