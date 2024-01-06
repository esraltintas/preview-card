import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CardProps } from "@/app/types";

const Card: React.FC<{ project: CardProps }> = ({ project }) => {
  return (
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
        <button>Add to Cart</button>
      </div>
    </Link>
  );
};

export default Card;
