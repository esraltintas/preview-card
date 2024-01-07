"use client";

import useCart from "../(store)/store";
export default function CartDetail() {
  const { cart } = useCart();
  return (
    <div>
      {cart &&
        cart.map((project) => <div key={project.id}>{project.name}</div>)}
    </div>
  );
}
