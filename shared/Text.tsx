import React from "react";

type Text = {
  type?: string | string[];
  children: string | JSX.Element | JSX.Element[];
  onClick?: () => void;
  className?: string;
};

const Text = ({ type, children, className, onClick }: Text) => {
  if (type === "h1") {
    return <h1 className={className}>{children}</h1>;
  }

  if (type === "h2") {
    return <h2 className={className}>{children}</h2>;
  }

  if (type === "h3") {
    return <h3 className={className}>{children}</h3>;
  }

  return (
    <>
      <p onClick={onClick} className={className}>
        {children}
      </p>
    </>
  );
};

export default Text;
