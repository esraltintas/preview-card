"use client";

import React from "react";
import { ButtonProps } from "@/app/types";
const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
