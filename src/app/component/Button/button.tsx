"use client";

import React from "react";
import { ButtonProps } from "@/app/types";
const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
