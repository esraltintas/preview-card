"use client";

import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useCart from "@/app/(store)/store";

export function Header() {
  const { cart } = useCart();
  console.log(cart);
  return (
    <div className={`${styles.headerWrapper}`} data-testid="header">
      <Link href={"/"}>
        <Image
          src="/cezeer.svg"
          alt="logo"
          className="h-[4vmin] pointer-events-none"
          width={80}
          height={80}
        />
      </Link>

      <h5 className="text-sm">Ceezer Marketplace</h5>
      <div>
        <span className="text-neutral-600">{cart?.length}</span>
        <Link href="/cart">
          <FontAwesomeIcon icon={faCartShopping} width={20} height={20} />
        </Link>
      </div>
    </div>
  );
}
