import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export function Header() {
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
        <Link href="/cart">
          <FontAwesomeIcon icon={faCartShopping} width={20} height={20} />
        </Link>
      </div>
    </div>
  );
}
