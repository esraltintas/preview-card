"use client";

import useCart from "../(store)/store";
export default function CartDetail() {
  const { cart } = useCart();
  console.log(cart);
  return (
    <div>
      {cart &&
        cart.map((project) => <div key={project.id}>{project.name}</div>)}
    </div>
  );
}
