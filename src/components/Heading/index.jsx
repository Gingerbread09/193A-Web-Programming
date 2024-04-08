import React from "react";

const sizes = {
  s: "text-[42px] font-bold md:text-[38px] sm:text-[32px]",
  xs: "text-base font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-arial ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
