import React from "react";
import Image from "next/image";
import { CardProps } from "@/app/types";

const CardDetails: React.FC<{ project: CardProps }> = ({ project }) => (
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
);

export default CardDetails;
