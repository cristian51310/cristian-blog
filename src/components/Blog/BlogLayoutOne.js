import { slug } from "github-slugger";
import Image from "next/image";
import Link from "next/link";
import Tag from "../category-tag";
import TextDecoration from "../text-decoration";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="group inline-block overflow-hidden rounded-md">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-md z-10"
      />

      <Image
        src={blog.image.filePath.replace("../public", "")}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="w-full h-full object-center object-cover rounded-md"
      />

      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        <Tag
          link={`/categories/${slug(blog.tags[0])}`}
          name={blog.tags[0]}
          className="px-6 text-xs sm:text-sm py-1 sm:py-2 "
        />
        <Link href={blog.url} className="mt-6">
          <h2 className="font-bold capitalize text-2xl text-amber-200 mt-2 sm:mt-4">
            <TextDecoration>
              {blog.title}
            </TextDecoration>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
