"use client";

import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useCart from "@/app/(store)/useCart";

export function Header() {
  const { cart } = useCart();
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    setCartLength(cart.length || 0);
  }, [cart]);

  return (
    <div className={`${styles.headerWrapper}`} data-testid="header">
      <Link href={"/"}>
        <Image
          src="/ceezer.svg"
          alt="logo"
          className="h-[4vmin] pointer-events-none"
          width={80}
          height={80}
        />
      </Link>

      <h5 className="text-sm">Ceezer Marketplace</h5>
      <div className="flex flex-row gap-2">
        <span className="text-neutral-600 font-bold">{cartLength}</span>
        <Link href="/cart">
          <FontAwesomeIcon icon={faCartShopping} width={20} height={20} />
        </Link>
      </div>
    </div>
  );
}
