"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/button";
import { CardProps } from "@/app/types";
import useCart from "@/app/(store)/store";

const Card: React.FC<{ project: CardProps }> = ({ project }) => {
  const { cart, addItemToCart } = useCart();
  const handleClick = () => {
    addItemToCart(project);
  };
  return (
    <div className="flex flex-col rounded-md p-6 bg-slate-50 hover:bg-indigo-100">
      <Link href={`/project/${project.id}`}>
        <div className="card-wrapper flex flex-col gap-4">
          <Image
            className="rounded-sm"
            src={project.image}
            alt={project.name}
            width={400}
            height={400}
          />
          <p className="truncate ...">{project.description}</p>
          <p>{project.name}</p>

          <div className="flex gap-5">
            <p>
              <span className="font-bold">Volume:</span>{" "}
              {project.offered_volume_in_tons}
            </p>
            <p>
              <span className="font-bold">Price:</span> {project.price_per_ton}€
            </p>
          </div>
        </div>
      </Link>
      <div className="flex items-end justify-end">
        <Button
          className="border border-black py-1 px-3 rounded-2xl max-w-40 mt-6 cursor-pointer hover:bg-gray-200"
          onClick={handleClick}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
