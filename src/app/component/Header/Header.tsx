import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

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
    </div>
  );
}
