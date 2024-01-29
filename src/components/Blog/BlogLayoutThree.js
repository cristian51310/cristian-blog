import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import TextDecoration from "../text-decoration";

const BlogLayoutThree = ({ blog }) => {
  return (
    <div className="group flex flex-col items-center text-dark dark:text-light">
      <Link href={blog.url} className="h-full rounded-md overflow-hidden  border border-dark/40 dark:border-white/30 ">
        <Image
          src={blog.image.filePath.replace("../public", "")}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="md:aspect-[4/3] aspect-video w-full h-full object-cover object-center group-hover:scale-110 transition-all ease duration-300 "
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm border rounded-md w-fit px-2 py-0.5">
          {blog.tags[0] === "diseno" ? "diseño" : blog.tags[0]}
        </span>

        <Link href={blog.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <TextDecoration>
              {blog.title}
            </TextDecoration>
          </h2>
        </Link>

        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
