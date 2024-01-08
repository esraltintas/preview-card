"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import useCart from "../(store)/useCart";

export default function Success() {
  const { emptyCart } = useCart();

  useEffect(() => {
    emptyCart();
  }, [emptyCart]);

  return (
    <div className="flex flex-col gap-5 p-20 justify-center items-center">
      <p className="font-medium text-xl">
        Your Checkout is successfully, you can continue to check other projects.
      </p>
      <Link className="font-medium text-lg" href="/">
        Back to home page
      </Link>
    </div>
  );
}
