"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CardProps } from "@/app/types";
import useCart from "@/app/(store)/store";

const Card: React.FC<{ project: CardProps }> = ({ project }) => {
  const { cart, addItemToCart } = useCart();
  const handleClick = () => {
    addItemToCart(project);
  };
  return (
    <div className="flex flex-col">
      <Link href={`/project/${project.id}`}>
        <div className="card-wrapper">
          <Image
            src={project.image}
            alt={project.name}
            width={100}
            height={100}
          />
          <p>{project.name}</p>
          <p>{project.description}</p>
          <p>{project.offered_volume_in_tons}</p>
        </div>
      </Link>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
};

export default Card;
