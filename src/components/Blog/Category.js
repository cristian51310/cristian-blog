import { cx } from "@/src/utils";
import Link from "next/link";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1 md:py-2 px-3 md:px-16 rounded-md border border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-1.5 text-sm md:text-base",
        props.className,
        active ? "bg-dark text-light dark:bg-light dark:text-dark" : "bg-light text-dark dark:bg-dark dark:text-light"
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
