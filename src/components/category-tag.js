import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark/50 text-light rounded-md capitalize font-semibold border border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base backdrop-blur-md",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
