import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import TextDecoration from "../text-decoration";

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-start text-dark dark:text-light">
      <Link
        href={blog.url}
        className=" col-span-12 lg:col-span-6 h-full rounded-md overflow-hidden"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="md:aspect-video aspect-video h-full w-fit object-cover object-center group-hover:scale-110 transition-all ease duration-300"
        />
      </Link>

      <div className="col-span-12 lg:col-span-6 w-full">
        <div className="flex w-full">
          <span className="inline-block uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm border rounded-md w-fit px-2 py-0.5">
            {blog.tags[0]}
          </span>
        </div>

        <Link href={blog.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <TextDecoration>
              {blog.title}
            </TextDecoration>
          </h2>
        </Link>

        <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
