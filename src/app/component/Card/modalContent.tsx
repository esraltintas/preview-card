import React from "react";
import Image from "next/image";
import { CardProps } from "@/app/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ModalContent: React.FC<{ project: CardProps }> = ({ project }) => (
  <div className="flex flex-row gap-2 p-2">
    <Image
      className="rounded-sm"
      src={project.image}
      alt={project.name}
      width={300}
      height={300}
    />
    <div className="flex flex-col gap-2">
      <p className="font-bold">{project.name}</p>
      <p>
        <span className="font-bold pr-0.5">Offered Volume in Tons:</span>
        {project?.offered_volume_in_tons}
      </p>

      <p>
        <span className="font-bold pr-0.5">Country:</span> {project?.country}
      </p>
      <p>
        <span className="font-bold pr-0.5">Price per Ton:</span>
        {project?.price_per_ton}
      </p>
      <p>
        <span className="font-bold pr-0.5">Distribution Weight:</span>
        {project?.distribution_weight}
      </p>
      <p>
        <span className="font-bold pr-0.5">Supplier Name:</span>
        {project?.supplier_name}
      </p>
      <p>
        <span className="font-bold pr-0.5">Earliest Delivery:</span>
        {project?.earliest_delivery}
      </p>
      {project.sdgs.length !== 0 ? (
        <div>
          <FontAwesomeIcon
            className="cursor-pointer text-lg"
            icon={faGlobe}
            width={20}
            height={20}
          />

          <span className="font-bold pl-2 pr-1">SDG:</span>

          {project.sdgs.map((sdgNumber, index) => (
            <span key={sdgNumber} className="sdg-item">
              {sdgNumber}
              {index === project.sdgs.length - 1 ? " " : ","}
            </span>
          ))}
        </div>
      ) : (
        ""
      )}
      <p>
        <span className="font-bold pr-0.5">Description:</span>
        {project?.description}
      </p>
    </div>
  </div>
);

export default ModalContent;
