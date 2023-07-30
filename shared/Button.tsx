import classNames from "classnames";
import React from "react";

type Button = {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  type?: "light" | "dark";
};

const Button = ({ children, type = "dark", className }: Button) => {
  const buttonClasses = classNames(
    { "rounded-sm border border-beige-900": type === "dark" },
    { "rounded-sm border border-white text-white": type === "light" },
    className
  );

  return <button className={`${buttonClasses}`}>{children}</button>;
};

export default Button;
